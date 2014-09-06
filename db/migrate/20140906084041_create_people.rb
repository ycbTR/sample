class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :first_name
      t.string :last_name
      t.string :address_1
      t.string :address_2
      t.string :town
      t.string :postcode
      t.string :email
      t.string :phone
      t.string :type

      t.timestamps
    end
  end
end
