class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
      t.integer :deposit_id
      t.integer :line_item_id
      t.integer :transfer_id
      t.integer :qty_deposited
      t.integer :qty_ordered
      t.integer :qty_transferred
      t.integer :user_id

      t.timestamps
    end
  end
end
