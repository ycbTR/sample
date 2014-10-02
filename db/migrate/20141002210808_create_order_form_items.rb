class CreateOrderFormItems < ActiveRecord::Migration
  def change
    create_table :order_form_items do |t|
      t.integer :order_form_id
      t.integer :deposit_id
      t.integer :plant_id
      t.float :grams

      t.timestamps
    end
  end
end
