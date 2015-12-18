class AddReferenceAndPlatPopulationToDeposite < ActiveRecord::Migration
  def change
    add_column :deposits, :plant_population, :string
    add_column :deposits, :reference, :string
  end
end
