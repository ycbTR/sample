class AddOrderIdToOrderForms < ActiveRecord::Migration
  def change
    add_column :orders, :order_form_id, :integer
    add_column :order_forms, :user_id, :integer
    add_column :order_forms, :state, :string
    add_column :order_forms, :telephone, :string
  end
end
