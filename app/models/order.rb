class Order < ActiveRecord::Base
  attr_accessible :completed_at, :customer_id, :number, :line_items_attributes, :customer_attributes

  has_many :line_items
  belongs_to :customer, class_name: "Person::Customer"

  accepts_nested_attributes_for :line_items, allow_destroy: true
  accepts_nested_attributes_for :customer, allow_destroy: true


end
