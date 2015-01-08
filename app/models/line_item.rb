# == Schema Information
#
# Table name: line_items
#
#  id                    :integer          not null, primary key
#  order_id              :integer
#  seedmix_or_individual :string(255)
#  qty                   :integer
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  deposit_id            :integer
#  price                 :decimal(, )
#

class LineItem < ActiveRecord::Base
  attr_accessible :order_id, :qty, :seedmix_or_individual,
                  :deposit_id, :price

  belongs_to :order
  belongs_to :deposit
  has_many :deposit_adjustments

  delegate :plant, to: :deposit
  delegate :lot_number, to: :deposit

  after_save :set_deposit_stock_adjustments
  after_save :update_order
  after_destroy :set_deposit_stock_adjustments_after_remove

  def after_cancel
    self.deposit.deposit_adjustments.create({:qty_bank => self.qty,
                                             :qty_allocated => (self.qty * -1),
                                             line_item_id: self.id,
                                             user_id: User.current.try(:id), comment: "After Cancel"}, without_protection: true)
  end

  private

  # New Create
  # Deposit changed, qty same
  # Qty changed, deposit same
  # Qty and deposit change


  def set_deposit_stock_adjustments
    if self.deposit_id_was.blank?
      #New Record
      #Decrease stock by self quantity
      create_adjustment(self.deposit, (-self.qty.to_f))
    elsif self.deposit_id_changed?
      d = Deposit.find_by_id(self.deposit_id_was)
      if d
        #Restock previous deposit with previous quantity
        create_adjustment(d, self.qty_was.to_f)
      end
      #Decrease stock by self quantity
      create_adjustment(self.deposit, (-self.qty.to_f))
    elsif self.qty_changed?
      decreased_amount = (self.qty_was.to_f - self.qty.to_f)
      create_adjustment(self.deposit, decreased_amount)
    end
  end

  def set_deposit_stock_adjustments_after_remove
    #Restock self quantity
    create_adjustment(self.deposit, self.qty.to_f)
  end


  def create_adjustment(d, qty_bank)
    d.deposit_adjustments.create({:qty_bank => qty_bank, :qty_allocated => (-qty_bank), line_item_id: self.id, user_id: User.current.try(:id)}, without_protection: true)
  end

  def update_order
    order.update!
  end

end
