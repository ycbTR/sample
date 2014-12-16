# == Schema Information
#
# Table name: plants
#
#  id              :integer          not null, primary key
#  species         :string(255)
#  common_name     :string(255)
#  price_paid      :decimal(, )
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  direct_seedable :boolean
#  level_1_price   :decimal(, )
#  level_2_price   :decimal(, )
#  level_3_price   :decimal(, )
#

require 'test_helper'

class PlantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
