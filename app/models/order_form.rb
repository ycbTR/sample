class OrderForm < ActiveRecord::Base
  attr_accessible :abn, :business_name, :comments, :email, :grams_per_km, :hectare, :kilometer,
                  :landholder_address, :landholder_name, :landholder_number, :mobile, :officer_address,
                  :officer_name, :officer_number, :payer, :pon, :property_address, :sb_no, :type

  has_many :orders
  has_many :order_form_items
  has_many :plants, :through => :order_form_items

end
