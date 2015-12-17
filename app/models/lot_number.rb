# == Schema Information
#
# Table name: lot_numbers
#
#  id           :integer          not null, primary key
#  number       :integer
#  region       :string(255)
#  provenance   :string(255)
#  location     :string(255)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  spa_name     :string(255)
#  spa_specific :boolean
#

class LotNumber < ActiveRecord::Base
  attr_accessible :location, :number, :provenance, :region, :heritage_ids,
                  :spa_name, :spa_specific, :self_heritage, :plant_population, :reference

  has_many :deposits, dependent: :destroy
  has_many :lot_heritages, class_name: "LotHeritage", dependent: :destroy
  has_many :heritages, through: :lot_heritages, class_name: "LotNumber", dependent: :destroy

  validates :number, presence: true, :uniqueness => true


  before_destroy :check_deposit

  def check_deposit
    if Deposit.where(lot_number_id: self.id).any? { |d| d.line_items.present? || d.order_form_items.present? }
      self.errors.add(:base, "You cannot delete this lot number since it has some orders.")
      return false
    end
  end


  def self.origin
    where("#{self.table_name}.id NOT IN(?)", LotHeritage.pluck(:lot_number_id).uniq)
  end

  def self.originated
    where(id: LotHeritage.pluck(:lot_number_id).uniq)
  end

  def display
    #if heritages.count > 0
    #  "#{spa_name} - #{heritages.pluck(:number).join('/')} > #{self.number}"
    #else
    "#{self.number}"
    #end
  end

  def heritage_lot_numbers
    lns = heritages.pluck(:number).join(',')
    lns = "NA" if lns.blank?
    lns
  end


end
