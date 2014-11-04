class AddSpaNameToLotNumbers < ActiveRecord::Migration
  def change
    add_column :lot_numbers, :spa_name, :string
  end
end
