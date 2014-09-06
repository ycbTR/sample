class CreateCatalogs < ActiveRecord::Migration
  def change
    create_table :catalogs do |t|
      t.integer :lot_number_id
      t.integer :plant_id
      t.integer :qty_in_bank
      t.integer :qty_on_consignment

      t.timestamps
    end
  end
end
