class CreateLineItems < ActiveRecord::Migration
  def change
    create_table :line_items do |t|
      t.integer :order_id
      t.integer :lot_number_id
      t.integer :plant_id
      t.string :seedmix_or_individual
      t.integer :qty

      t.timestamps
    end
  end
end
