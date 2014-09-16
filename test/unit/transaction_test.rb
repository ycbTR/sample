# == Schema Information
#
# Table name: transactions
#
#  id              :integer          not null, primary key
#  deposit_id      :integer
#  line_item_id    :integer
#  transfer_id     :integer
#  qty_deposited   :integer
#  qty_ordered     :integer
#  qty_transferred :integer
#  user_id         :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class TransactionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
