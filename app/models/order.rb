# == Schema Information
#
# Table name: orders
#
#  id            :integer          not null, primary key
#  number        :string(255)
#  customer_id   :integer
#  completed_at  :datetime
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  total         :decimal(, )
#  state         :string(255)
#  order_form_id :integer
#

class Order < ActiveRecord::Base
  attr_accessor :number_prefix
  attr_accessible :completed_at, :customer_id, :number, :line_items_attributes, :customer_attributes, :state_event
  before_create :generate_number
  validates :customer, presence: true
  after_save :change_customer

  def generate_number
    self.number = "#{number_prefix}#{(Order.order("id").last.try(:id).to_i + 1).to_s.rjust(4, "0")}"
  end


  has_many :line_items
  belongs_to :customer, class_name: "Person"
  belongs_to :order_form

  accepts_nested_attributes_for :line_items, allow_destroy: true
  accepts_nested_attributes_for :customer, allow_destroy: true

  state_machine :initial => :pending do

    event :new do
      transition :from => :pending, :to => [:new], if: Proc.new { |o| o.line_items.blank? }
    end

    event :pend do
      transition :to => :pending, :from => [:processed]
    end

    event :process do
      transition :to => :processed, :from => :pending
    end

    event :complete do
      transition :to => :completed, :from => :processed
    end

    event :cancel do
      transition :to => :canceled
    end


    after_transition :from => :pending, :to => :processed, :do => :notify_processed
    after_transition :to => :canceled, :do => :after_cancel
    after_transition :to => :completed, :do => :set_completed_at

  end

  def set_completed_at
    self.touch(:completed_at)
  end

  # it gets next possible authorized events of current state
  def next_state_events
    t = self.state_transitions(:from => self.state.to_sym)
    authorized_events = Array.new
    t.each do |transition|
      #if (is_authorized_event?(transition.event.to_s, user.role.name, self.state))
      authorized_events << transition
      #end
    end
    authorized_events
  end


  def form_type
    if self.order_form.present?
      self.order_form.type.demodulize
    end
  end

  def after_cancel
    self.line_items.each(&:after_cancel)
  end

  # Updates total
  def update!
    self.update_column(:total, self.line_items.sum(:price))
  end

  private

  def notify_processed
    if self.customer.present?
      begin
        OrderMailer.notify_processed(self)
      rescue
      end
    end
  end

  def change_customer
    if self.customer_id_changed? && self.order_form.present?
      self.order_form.update_column(:customer_id, customer_id)
      person = Person.find(customer_id)
      if person.type == "Person::Collector"
        person.update_column(:is_customer, true)
      end
    end
  end

end
