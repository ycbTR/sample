class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :number
      t.integer :customer_id
      t.datetime :completed_at

      t.timestamps
    end
  end
end
