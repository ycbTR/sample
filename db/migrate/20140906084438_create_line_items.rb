class CreateLineItems < ActiveRecord::Migration
  def change
    create_table :line_items do |t|
      t.integer :order_id
      t.integer :deposit_id
      t.string :seedmix_or_individual
      t.integer :qty

      t.timestamps
    end
  end
end
