class AddQtyCommentToDeposits < ActiveRecord::Migration
  def change
    add_column :deposits, :qty_onhold, :integer
    add_column :deposits, :comments, :text
  end
end
