# == Schema Information
#
# Table name: order_forms
#
#  id                 :integer          not null, primary key
#  type               :string(255)
#  officer_name       :string(255)
#  officer_number     :string(255)
#  officer_address    :text
#  landholder_name    :string(255)
#  landholder_number  :string(255)
#  landholder_address :text
#  property_address   :text
#  hectare            :string(255)
#  kilometer          :string(255)
#  grams_per_km       :string(255)
#  sb_no              :string(255)
#  pon                :string(255)
#  business_name      :string(255)
#  abn                :string(255)
#  payer              :string(255)
#  email              :string(255)
#  mobile             :string(255)
#  comments           :text
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  order_id           :integer
#  user_id            :integer
#  state              :string(255)
#  telephone          :string(255)
#

class OrderForm < ActiveRecord::Base

  attr_accessible :abn, :business_name, :comments, :email, :grams_per_km, :hectare, :kilometer,
                  :landholder_address, :landholder_name, :landholder_number, :mobile, :officer_address,
                  :officer_name, :officer_number, :payer, :pon, :property_address, :sb_no, :type, :telephone,
                  :order_form_items_attributes, :customer_id


  has_one :order
  belongs_to :user
  belongs_to :customer, class_name: "Person::Customer"

  has_many :order_form_items, dependent: :destroy
  alias_method :items, :order_form_items
  has_many :plants, :through => :order_form_items

  accepts_nested_attributes_for :order_form_items
  validates :order_form_items, presence: true

  state_machine :initial => :empty do
    event :complete do
      transition :to => :completed
    end
    after_transition :to => :completed, :do => :after_complete
  end

  def self.of_type(t)
    where(type: t)
  end

  def display
    "#{self.type.demodulize} Order Form"
  end

  def nursery?
    false
  end


  private

  def after_complete
    create_order
    notify_admin
    notify_customer
  end

  def notify_admin
    OrderMailer.new_order_to_admin(self).deliver rescue ""
  end

  def notify_customer
    OrderMailer.new_order_to_customer(self).deliver rescue ""
  end

  def create_order
    _order = build_order
    _order.number_prefix = self.prefix
    _order.customer_id = self.customer_id || self.user.customer.id
    self.items.each do |item|
      li = _order.line_items.build
      li.deposit_id = item.deposit_id
      li.qty = item.grams
      (li.price = (item.plant.price_for(item.grams))) if self.nursery?
    end
    _order.save
  end

end
