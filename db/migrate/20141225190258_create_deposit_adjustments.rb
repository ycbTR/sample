class CreateDepositAdjustments < ActiveRecord::Migration
  def change
    create_table :deposit_adjustments do |t|
      t.integer :deposit_id
      t.integer :user_id
      t.integer :line_item_id
      t.text :comment

      t.boolean :initial, default: false
      t.decimal :qty_onhold, :decimal, :precision => 8, :scale => 2
      t.decimal :qty_allocated, :decimal, :precision => 8, :scale => 2
      t.decimal :qty_bank, :decimal, :precision => 8, :scale => 2
      t.decimal :qty_consigned, :decimal, :precision => 8, :scale => 2

      t.timestamps
    end
  end
end
