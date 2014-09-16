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

class Transaction < ActiveRecord::Base
  attr_accessible :deposit_id, :line_item_id, :qty_deposited, :qty_ordered, :qty_transferred, :transfer_id, :user_id

  belongs_to :line_item
  belongs_to :deposit
  belongs_to :transfer
  belongs_to :user

end
