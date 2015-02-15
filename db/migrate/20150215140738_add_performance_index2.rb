class AddPerformanceIndex2 < ActiveRecord::Migration
  def up
    add_index :deposits, [:deleted_at, :lot_number_id, :plant_id], name: "d2"
    add_index :deposits, [:deleted_at], name: "d3"
    add_index :plants, [:id, :species], name: "pid_spec"
    add_index :lot_numbers, [:id, :spa_specific], name: "id_spa_spec"
  end

  def down
  end
end
