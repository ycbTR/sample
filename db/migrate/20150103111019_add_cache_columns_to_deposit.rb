class AddCacheColumnsToDeposit < ActiveRecord::Migration
  def change
    add_column :deposits, :cached_qty_bank, :float
    add_column :deposits, :cached_qty_allocated, :float
    add_column :deposits, :cached_qty_consigned, :float
    add_column :deposits, :cached_qty_onhold, :float
    DepositAdjustment.all.each(&:save)
  end
end
