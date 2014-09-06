class Catalog < ActiveRecord::Base
  attr_accessible :lot_number_id, :plant_id, :qty_in_bank, :qty_on_consignment
end
