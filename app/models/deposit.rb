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
#

class Deposit < ActiveRecord::Base
  attr_accessible :date, :lot_number_id, :plant_id, :qty_bank, :qty_consigned, :collector_id

  belongs_to :plant
  belongs_to :collector, class_name: "Person::Collector"
  belongs_to :lot_number

  def display
    "#{lot_number.number}/#{date.to_date.month}"
  end


end
