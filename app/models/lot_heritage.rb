# == Schema Information
#
# Table name: lot_heritages
#
#  id            :integer          not null, primary key
#  lot_number_id :integer
#  heritage_id   :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class LotHeritage < ActiveRecord::Base
  attr_accessible :heritage_id, :lot_number_id

  belongs_to :lot_number
  belongs_to :heritage, class_name: "LotNumber"

end


# L3 = originated from > L1
# L4 = originated from > L1
# Heritage of L3 is L1


# lot_number_id: L3, heritage_id: L1
