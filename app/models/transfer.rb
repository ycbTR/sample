class Transfer < ActiveRecord::Base
  attr_accessible :date, :lot_number_id, :plant_id, :qty_transferred, :user_id

  belongs_to :lot_number
  belongs_to :plant
  belongs_to :user

end
