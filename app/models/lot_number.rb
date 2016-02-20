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

  def self.mass_assign(file)
    row = 1
    loop do
      row += 1
      current_row = file.row(row)
      break if current_row[3] == nil
      current_lot = LotNumber.create(number: current_row[0].nil? ? LotNumber.last.number + 1 : current_row[0], region: current_row[4], provenance: current_row[5], location: current_row[6], spa_name: nil, spa_specific: "Yes", self_heritage: "No")
      current_lot.deposits.build(plant_id: current_row[3], date: current_row[2], qty_bank: current_row[8], qty_consigned: 0, collector_id: current_row[1], qty_onhold: 0, comments: current_row[10], plant_population: current_row[9], reference: current_row[7])
    end
  end
end
