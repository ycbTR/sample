class AddCustomerIdToOrderForms < ActiveRecord::Migration
  def change
    add_column :order_forms, :customer_id, :integer
  end
end
