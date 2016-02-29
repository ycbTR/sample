class AddFlagToLotNumbers < ActiveRecord::Migration
  def change
    add_column :lot_numbers, :mass_num, :integer
  end
end
