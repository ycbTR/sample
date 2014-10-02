class AddPriceToLineItem < ActiveRecord::Migration
  def change
    add_column :line_items, :price, :decimal
    add_column :orders, :total, :decimal
    add_column :orders, :state, :string
  end
end
