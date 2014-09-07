class Deposit < ActiveRecord::Base
  attr_accessible :date, :lot_number_id, :plant_id, :qty_bank, :qty_consigned

  belongs_to :plant
  belongs_to :lot_number


end
