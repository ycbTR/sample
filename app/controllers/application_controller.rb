class ApplicationController < ActionController::Base
  protect_from_forgery


  def collector_required!
    if Person::Collector.all.blank?
      flash[:warning] = "Collector is required to continue."
      redirect_to new_person_path and return
    end
  end

  def plant_required!
    if Plant.all.blank?
      flash[:warning] = "Plant is required to continue."
      redirect_to new_plant_path and return
    end
  end

  def deposits_required!
    if Deposit.all.blank?
      flash[:warning] = "Deposit is required to continue."
      redirect_to new_deposit_path and return
    end
  end

  def lot_number_required!
    if LotNumber.all.blank?
      flash[:warning] = "Lot Number is required to continue."
      redirect_to new_lot_number_path and return
    end

  end


end
