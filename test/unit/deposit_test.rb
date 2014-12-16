# == Schema Information
#
# Table name: deposits
#
#  id            :integer          not null, primary key
#  lot_number_id :integer
#  plant_id      :integer
#  date          :date
#  qty_bank      :integer
#  qty_consigned :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  collector_id  :integer
#  heritage_id   :integer
#  qty_onhold    :integer
#  comments      :text
#

require 'test_helper'

class DepositTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
