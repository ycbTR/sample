class Transaction < ActiveRecord::Base
  attr_accessible :deposit_id, :line_item_id, :qty_deposited, :qty_ordered, :qty_transferred, :transfer_id, :user_id

  belongs_to :line_item
  belongs_to :deposit
  belongs_to :transfer
  belongs_to :user

end
