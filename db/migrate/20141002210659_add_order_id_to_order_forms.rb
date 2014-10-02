class AddOrderIdToOrderForms < ActiveRecord::Migration
  def change
    add_column :order_forms, :order_id, :integer
  end
end
