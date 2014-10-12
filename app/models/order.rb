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
  attr_accessible :completed_at, :customer_id, :number, :line_items_attributes, :customer_attributes, :state_event
  before_create :generate_number

  def generate_number
    self.number = "O#{rand.to_s[2..8]}"
  end

  has_many :line_items
  belongs_to :customer, class_name: "Person::Customer"
  belongs_to :order_form

  accepts_nested_attributes_for :line_items, allow_destroy: true
  accepts_nested_attributes_for :customer, allow_destroy: true

  state_machine :initial => :pending do

    event :pend do
      transition :to => :pending
    end

    event :process do
      transition :to => :processed
    end

    event :complete do
      transition :to => :completed
    end


    after_transition :from => :pending, :to => :processed, :do => :notify_processed

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

end
