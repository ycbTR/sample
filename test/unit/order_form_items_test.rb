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

require 'test_helper'

class OrderFormItemsTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
