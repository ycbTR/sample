class AddDeletedAtToDepositAdjustments < ActiveRecord::Migration
  def change
    add_column :deposit_adjustments, :deleted_at, :datetime
    add_column :deposits, :deleted_at, :datetime
  end
end
