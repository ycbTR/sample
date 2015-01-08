# == Schema Information
#
# Table name: plants
#
#  id              :integer          not null, primary key
#  species         :string(255)
#  common_name     :string(255)
#  price_paid      :decimal(, )
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  direct_seedable :boolean
#  level_1_price   :decimal(, )
#  level_2_price   :decimal(, )
#  level_3_price   :decimal(, )
#

class Plant < ActiveRecord::Base
  attr_accessible :common_name, :price_paid, :species,
                  :direct_seedable, :level_1_price, :level_2_price, :level_3_price

  validates :common_name, :species, :price_paid, presence: true


  # plant.price_for(300)
  def price_for(grams = 0)
    if grams < 50
      level_1_price * 0.001 * grams
    elsif grams < 500
      level_2_price * 0.001 * grams
    else
      level_3_price * 0.001 * grams
    end
  end

  ##1-49g
  #def level_1_price
  #  price_paid * 1.92
  #end
  #
  ##50-499g
  #def level_2_price
  #  price_paid * 1.44
  #end
  #
  ##>500
  #def level_3_price
  #  price_paid * 1.2
  #end

end
