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
  has_many :order_form_items
  has_many :deposit_adjustments, dependent: :destroy
  after_create :set_initial_deposit_adjustment
  scope :active, where(:deleted_at => nil)
  scope :deleted, where("#{Deposit.table_name}.deleted_at is not null")

  validates :lot_number_id, presence: true
  validates_uniqueness_of :lot_number_id, :scope => [:deleted_at]

  def self.with_eager_load
    joins(:plant, :lot_number).includes(:plant, :lot_number)
  end

  def self.seeding
    with_eager_load.available.where("#{Plant.table_name}.direct_seedable = ?", true).where("(#{LotNumber.table_name}.spa_specific = ? OR #{LotNumber.table_name}.spa_specific IS NULL)", false)
  end

  def self.nursery
    with_eager_load.available.where("(#{LotNumber.table_name}.spa_specific = ? OR #{LotNumber.table_name}.spa_specific IS NULL)", false)
  end

  def self.spa
    with_eager_load.available.where("#{LotNumber.table_name}.spa_specific = ?", true)
  end

  def self.general
    with_eager_load.available.where("(#{LotNumber.table_name}.spa_specific = ? OR #{LotNumber.table_name}.spa_specific IS NULL)", false).order("plants.species asc")
  end

  def self.available
    if User.current && User.current.admin?
      where("")
    else
      where("(cached_qty_bank + cached_qty_consigned) > 0")
    end
  end

  def display
    "#{lot_number.display}/#{date.to_date.year.to_s[2..4]}"
  end

  def destroy
    self.touch(:deleted_at)
  end

  #To show on catalogues
  def total_quantity
    cached_qty_bank.to_f + cached_qty_consigned.to_f
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
    adj.comment = self.comments
    adj.save!
  end


end
