class LineItem < ActiveRecord::Base
  attr_accessible :lot_number_id, :order_id, :plant_id, :qty, :seedmix_or_individual
end
