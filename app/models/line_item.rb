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

  delegate :plant, to: :deposit
  delegate :lot_number, to: :deposit

  after_save :set_deposit_consignment
  after_save :set_transfers
  after_save :update_order


  private

  def set_deposit_consignment
    if self.qty_changed?
      # 3 > 2
      if self.qty_was.to_i > self.qty.to_i #Decreased quantity
        self.deposit.qty_bank = self.deposit.qty_bank.to_i + (self.qty_was.to_i - self.qty.to_i)
        self.deposit.qty_consigned = self.deposit.qty_consigned.to_i - (self.qty_was.to_i - self.qty.to_i)
      else
        self.deposit.qty_bank = self.deposit.qty_bank.to_i - (self.qty.to_i - self.qty_was.to_i)
        self.deposit.qty_consigned = self.deposit.qty_consigned.to_i + (self.qty.to_i - self.qty_was.to_i)
      end
      self.deposit.save!
    end
    true
  end

  # Why we need this?
  def set_transfers

  end

  def update_order
    order.update!
  end

end
