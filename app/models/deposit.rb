# == Schema Information
#
# Table name: deposits
#
#  id            :integer          not null, primary key
#  lot_number_id :integer
#  plant_id      :integer
#  date          :date
#  qty_bank      :integer
#  qty_consigned :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  collector_id  :integer
#  heritage_id   :integer
#  qty_onhold    :integer
#  comments      :text
#

class Deposit < ActiveRecord::Base
  attr_accessible :date, :lot_number_id, :plant_id, :qty_bank,
                  :qty_consigned, :qty_onhold, :collector_id, :comments

  belongs_to :plant
  belongs_to :collector, class_name: "Person::Collector"
  belongs_to :lot_number
  has_many :line_items
  has_many :deposit_adjustments, dependent: :destroy
  after_create :set_initial_deposit_adjustment

  def display
    "#{lot_number.display}/#{date.to_date.month}"
  end

  #To show on catalogues
  def total_quantity
    qty_bank_with_adjustments.to_f + qty_consigned_with_adjustments.to_f
  end

  [:qty_bank, :qty_consigned, :qty_onhold, :qty_allocated].each do |q|
    define_method("#{q}_with_adjustments".to_sym) do
      self.deposit_adjustments.sum(q).to_f
    end
  end

  def set_initial_deposit_adjustment
    adj = self.deposit_adjustments.new
    adj.initial = true
    adj.user = User.current
    adj.qty_bank = self.qty_bank
    adj.qty_consigned = self.qty_consigned
    adj.qty_onhold = self.qty_onhold
    adj.qty_allocated = self.qty_allocated
    adj.save!
  end


end
