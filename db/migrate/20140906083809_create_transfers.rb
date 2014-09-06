class CreateTransfers < ActiveRecord::Migration
  def change
    create_table :transfers do |t|
      t.integer :lot_number_id
      t.integer :plant_id
      t.integer :qty_transferred
      t.date :date
      t.integer :user_id

      t.timestamps
    end
  end
end
