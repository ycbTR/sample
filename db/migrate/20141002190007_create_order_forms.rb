class CreateOrderForms < ActiveRecord::Migration
  def change
    create_table :order_forms do |t|
      t.string :type
      t.string :officer_name
      t.string :officer_number
      t.text :officer_address
      t.string :landholder_name
      t.string :landholder_number
      t.text :landholder_address
      t.text :property_address
      t.string :hectare
      t.string :kilometer
      t.string :grams_per_km
      t.string :sb_no
      t.string :pon
      t.string :business_name
      t.string :abn
      t.string :payer
      t.string :email
      t.string :mobile
      t.text :comments

      t.timestamps
    end
  end
end
