class ChangeColumnTypeOfLotNumber < ActiveRecord::Migration
  def up
    remove_column :lot_numbers, :number
    add_column :lot_numbers, :number, :integer
  end

  def down
    remove_column :lot_numbers, :number
    add_column :lot_numbers, :number, :string
  end
end
