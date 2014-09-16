# == Schema Information
#
# Table name: plants
#
#  id            :integer          not null, primary key
#  species       :string(255)
#  common_name   :string(255)
#  price_paid    :decimal(, )
#  price_charged :decimal(, )
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class PlantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
