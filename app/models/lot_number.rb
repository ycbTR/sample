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
                  :spa_name, :spa_specific
  has_many :line_items

  has_many :deposits, dependent: :destroy
  has_many :lot_heritages, class_name: "LotHeritage", dependent: :destroy
  has_many :heritages, through: :lot_heritages, class_name: "LotNumber", dependent: :destroy

  validates :number, presence: true, :uniqueness => true

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
