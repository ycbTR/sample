# == Schema Information
#
# Table name: order_form_items
#
#  id            :integer          not null, primary key
#  order_form_id :integer
#  plant_id      :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  grams         :float
#  deposit_id    :integer
#

class OrderFormItem < ActiveRecord::Base
  attr_accessible :order_form_id, :plant_id, :deposit_id, :grams
  belongs_to :order_form
  belongs_to :plant
  belongs_to :deposit

end
