# == Schema Information
#
# Table name: transfers
#
#  id              :integer          not null, primary key
#  lot_number_id   :integer
#  plant_id        :integer
#  qty_transferred :integer
#  date            :date
#  user_id         :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class TransferTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
