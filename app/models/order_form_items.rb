class OrderFormItems < ActiveRecord::Base
  attr_accessible :order_form_id, :plant_id
  belongs_to :order_form
  belongs_to :plant

end
