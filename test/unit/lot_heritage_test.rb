# == Schema Information
#
# Table name: lot_heritages
#
#  id            :integer          not null, primary key
#  lot_number_id :integer
#  heritage_id   :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class LotHeritageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
