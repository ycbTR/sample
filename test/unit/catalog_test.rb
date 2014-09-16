# == Schema Information
#
# Table name: catalogs
#
#  id                 :integer          not null, primary key
#  lot_number_id      :integer
#  plant_id           :integer
#  qty_in_bank        :integer
#  qty_on_consignment :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

require 'test_helper'

class CatalogTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
