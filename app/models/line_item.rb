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

  def after_cancel
    self.deposit.deposit_adjustments.create({:qty_bank => self.qty,
                                             :qty_allocated => (self.qty * -1),
                                             line_item_id: self.id,
                                             user_id: User.current.try(:id), comment: "After Cancel"}, without_protection: true)
  end

  private

  def set_deposit_stock_adjustments
    if self.qty_changed?
      decreased_amount = (self.qty_was.to_f - self.qty.to_f)
      self.deposit.deposit_adjustments.create({:qty_bank => decreased_amount, :qty_allocated => (decreased_amount * -1), line_item_id: self.id, user_id: User.current.try(:id)}, without_protection: true)
    end
    true
  end

  def update_order
    order.update!
  end

end
