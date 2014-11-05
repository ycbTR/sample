class HomeController < ApplicationController


  def index

  end

  # Only originateds
  def catalogue_spa
    # Means deposits where
    @deposits = Deposit.where(:lot_number_id => LotNumber.originated.pluck(:id))
  end

  # Only origins
  def catalogue_general
    #@deposits = Deposit.where(:lot_number_id => LotNumber.origin.pluck(:id))
    @deposits = Deposit.joins(:plant).order("plants.species asc")
  end

end