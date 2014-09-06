class CreateLotNumbers < ActiveRecord::Migration
  def change
    create_table :lot_numbers do |t|
      t.string :number
      t.string :region
      t.string :provenance
      t.string :location

      t.timestamps
    end
  end
end
