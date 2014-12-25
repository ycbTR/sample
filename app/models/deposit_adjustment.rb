class DepositAdjustment < ActiveRecord::Base
  attr_accessible :qty_allocated, :qty_bank, :qty_consigned, :qty_onhold,
                  :deposit_id, :comment
  belongs_to :user
  belongs_to :line_item
  belongs_to :deposit
end
