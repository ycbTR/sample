class DepositAdjustment < ActiveRecord::Base
  attr_accessible :qty_allocated, :qty_bank, :qty_consigned, :qty_onhold,
                  :deposit_id, :comment
  belongs_to :user
  belongs_to :line_item
  belongs_to :deposit
  after_save :set_cache

  def reverse!
    self.touch(:deleted_at)
    _res = self.dup
    _res.qty_allocated = 0 - _res.qty_allocated.to_f
    _res.qty_bank = 0 - _res.qty_bank.to_f
    _res.qty_consigned = 0 - _res.qty_consigned.to_f
    _res.qty_onhold = 0 - _res.qty_onhold.to_f
    _res.comment = "Reversal of lot number #{self.deposit.display}, Date & Time #{self.created_at.to_s(:long)}"
    _res.save!
  end

  def set_cache
    self.deposit.update_column(:cached_qty_bank, self.deposit.qty_bank_with_adjustments)
    self.deposit.update_column(:cached_qty_allocated, self.deposit.qty_allocated_with_adjustments)
    self.deposit.update_column(:cached_qty_consigned, self.deposit.qty_consigned_with_adjustments)
    self.deposit.update_column(:cached_qty_onhold, self.deposit.qty_onhold_with_adjustments)
  end

end
