class CreatePlants < ActiveRecord::Migration
  def change
    create_table :plants do |t|
      t.string :species
      t.string :common_name
      t.decimal :price_paid
      t.decimal :price_charged

      t.timestamps
    end
  end
end
