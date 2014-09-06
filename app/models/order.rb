class Order < ActiveRecord::Base
  attr_accessible :completed_at, :customer_id, :number
end
