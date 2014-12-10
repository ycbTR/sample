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
  attr_accessible :common_name, :price_charged, :price_paid, :species,
                  :direct_seedable

  validates :common_name, :species, :price_paid, presence: true


  # plant.price_for(300)
  def price_for(grams = 0)
    if grams < 50
      level_1_price
    elsif grams < 500
      level_2_price
    else
      level_3_price
    end
  end

  #1-49g
  def level_1_price
    price_paid * 1.92
  end

  #50-499g
  def level_2_price
    price_paid * 1.44
  end

  #>500
  def level_3_price
    price_paid * 1.2
  end

end
