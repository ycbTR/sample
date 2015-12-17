class AddReferenceAndPlatPopulation < ActiveRecord::Migration
  def change
  	add_column :lot_numbers, :reference, :string
  	add_column :lot_numbers, :plant_population, :string
  end
end
