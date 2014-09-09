class Deposit < ActiveRecord::Base
  attr_accessible :date, :lot_number_id, :plant_id, :qty_bank, :qty_consigned, :collector_id

  belongs_to :plant
  belongs_to :lot_number

  def display
    "#{lot_number.number}/#{date.to_date.month}"
  end


end
