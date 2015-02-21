class AddcolumnToLotNumber < ActiveRecord::Migration
  def change
    add_column :lot_numbers, :self_heritage, :boolean, default: false
  end
end
