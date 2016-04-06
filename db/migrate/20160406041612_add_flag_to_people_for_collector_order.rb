class AddFlagToPeopleForCollectorOrder < ActiveRecord::Migration
  def change
    add_column :people, :is_customer, :boolean
  end
end
