class AddExtraColumns3Dec < ActiveRecord::Migration
  def change

    add_column :plants, :direct_seedable, :boolean, :default => false
    add_column :lot_numbers, :spa_specific, :boolean, :default => false

  end
end
