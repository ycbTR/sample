class AddPayeeDetailsToOrderForm < ActiveRecord::Migration
  def change
    add_column :order_forms, :payee_name, :string
    add_column :order_forms, :payee_address, :text
    add_column :order_forms, :payee_number, :string
  end
end
