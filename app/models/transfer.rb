# == Schema Information
#
# Table name: transfers
#
#  id              :integer          not null, primary key
#  lot_number_id   :integer
#  plant_id        :integer
#  qty_transferred :integer
#  date            :date
#  user_id         :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Transfer < ActiveRecord::Base
  attr_accessible :date, :lot_number_id, :plant_id, :qty_transferred, :user_id

  belongs_to :lot_number
  belongs_to :plant
  belongs_to :user

end
