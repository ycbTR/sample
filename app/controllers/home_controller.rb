class HomeController < ApplicationController
     before_filter :only_staff!, only: [:catalogue_spa]

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

  def only_staff!
    unless current_user && current_user.staff?
      redirect_to catalogue_general_path and return
    end
  end

end