class HomeController < ApplicationController


  def index

  end

  def catalogue_nursery
    @deposits = Deposit.joins(:plant, :lot_number).where("#{LotNumber.table_name}.spa_specific = ?", true)
  end
  #direct seeding
  def catalogue_seeding
    @deposits = Deposit.joins(:plant, :lot_number).where("#{LotNumber.table_name}.spa_specific = ?", false).where("#{Plant.table_name}.direct_seedable = ?", false)
  end

  def catalogue_spa
    @deposits = Deposit.eager_load(:lot_number).where("#{LotNumber.table_name}.spa_specific = ?", true)
  end

  def catalogue_general
    @deposits = Deposit.joins(:plant).order("plants.species asc")
  end

end