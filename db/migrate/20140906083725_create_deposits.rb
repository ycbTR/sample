class CreateDeposits < ActiveRecord::Migration
  def change
    create_table :deposits do |t|
      t.integer :lot_number_id
      t.integer :plant_id
      t.integer :collector_id
      t.date :date
      t.integer :qty_bank
      t.integer :qty_consigned

      t.timestamps
    end
  end
end
