# == Schema Information
#
# Table name: catalogs
#
#  id                 :integer          not null, primary key
#  lot_number_id      :integer
#  plant_id           :integer
#  qty_in_bank        :integer
#  qty_on_consignment :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Catalog < ActiveRecord::Base
  attr_accessible :lot_number_id, :plant_id, :qty_in_bank, :qty_on_consignment
  belongs_to :plant
  belongs_to :lot_number
end
