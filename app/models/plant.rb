# == Schema Information
#
# Table name: plants
#
#  id            :integer          not null, primary key
#  species       :string(255)
#  common_name   :string(255)
#  price_paid    :decimal(, )
#  price_charged :decimal(, )
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Plant < ActiveRecord::Base
  attr_accessible :common_name, :price_charged, :price_paid, :species
  validates :common_name, :species, :price_paid, presence: true

  #1-49g
  def level_1_price
    price_paid
  end

  #50-499g
  def level_2_price
    price_paid * 3/4
  end

  #>500
  def level_3_price
    price_paid * 5/8
  end

end
