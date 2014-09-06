class Plant < ActiveRecord::Base
  attr_accessible :common_name, :price_charged, :price_paid, :species
end
