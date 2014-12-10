class HomeController < ApplicationController


  def index

  end

  # Only originateds

  #•	SPA specific  - only shows lot numbers with SPAspec = true
  #•	Direct Seeding only shows plants with Dseedable = true and SPAspec = false
  #•	Nursery only shows plants with SPAspec = false and Dseedable true and false

  def catalogue_nursery

  end

  def catalogue_direct
    @deposits = Deposit.eager_load(:lot_number).where("#{LotNumber.table_name}.spa_specific = ?", false)
  end

  # TODO Only staff can see?
  def catalogue_spa
    #@deposits = Deposit.where(:lot_number_id => LotNumber.originated.pluck(:id))
    @deposits = Deposit.eager_load(:lot_number).where("#{LotNumber.table_name}.spa_specific = ?", true)
  end

  # Only origins
  def catalogue_general
    #@deposits = Deposit.where(:lot_number_id => LotNumber.origin.pluck(:id))
    @deposits = Deposit.joins(:plant).order("plants.species asc")
  end

end