class CreateLotHeritages < ActiveRecord::Migration
  def change
    create_table :lot_heritages do |t|
      t.integer :lot_number_id
      t.integer :heritage_id

      t.timestamps
    end
  end
end
