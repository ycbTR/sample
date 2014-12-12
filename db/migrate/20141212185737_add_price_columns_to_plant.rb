class AddPriceColumnsToPlant < ActiveRecord::Migration
  def change

    add_column :plants, :level_1_price, :decimal
    add_column :plants, :level_2_price, :decimal
    add_column :plants, :level_3_price, :decimal

    remove_column :plants, :price_charged
    Plant.reset_column_information

    Plant.update_all("level_1_price = (price_paid * 1.92)")
    Plant.update_all("level_2_price = (price_paid * 1.44)")
    Plant.update_all("level_3_price = (price_paid * 1.2)")

  end
end
