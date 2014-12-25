class AddQuantity2ColumnstToDeposits < ActiveRecord::Migration
  def change
    add_column :deposits, :qty_allocated, :decimal, :precision => 8, :scale => 2
    change_column :deposits, :qty_bank, :decimal, :precision => 8, :scale => 2
    change_column :deposits, :qty_onhold, :decimal, :precision => 8, :scale => 2
    change_column :deposits, :qty_consigned, :decimal, :precision => 8, :scale => 2
  end
end
