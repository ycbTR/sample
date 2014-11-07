class ChangeColumnTypeOfLotNumber < ActiveRecord::Migration
  def change
    change_column :lot_numbers, :number, :integer
  end
end
