class ChangeColumnTypeOfLotNumber < ActiveRecord::Migration
  def change
    change_column :lot_numbers, :number, 'integer USING CAST(number AS integer)'
  end
end
