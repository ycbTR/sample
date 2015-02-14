class AddPerformanceIndex < ActiveRecord::Migration
  def up
    add_index :deposits, [:date, :collector_id], name: "d1"
    add_index :lot_numbers, [:spa_specific], name: "l1"
    add_index :lot_numbers, [:spa_specific, :spa_name], name: "l2"
    add_index :people, [:id, :type], name: "p1"
  end

  def down
  end
end
