class HomeController < ApplicationController
  before_filter :only_staff!, only: [:catalogue_spa]
  before_filter :set_header

  def index

  end

  def catalogue_nursery
    @deposits = Deposit.nursery.active
  end

  #direct seeding
  def catalogue_seeding
    if Rails.env.production?
      ids = Deposit.select("DISTINCT ON(plant_id) *").pluck(:id)
      @deposits = Deposit.seeding.active.where(id: ids).uniq
    else
      @deposits = Deposit.seeding.active.group(:plant_id).uniq
    end
  end

  def catalogue_spa
    @deposits = Deposit.spa.active
  end

  def catalogue_general
    @deposits = Deposit.general.active
  end

  def only_staff!
    unless current_user && current_user.staff?
      redirect_to catalogue_general_path and return
    end
  end

  def set_header
    if request.format == "application/xls"
      filename = params[:action].to_s.titleize
      filename += "-#{Time.now.to_s.parameterize}"
      filename += ".xls"
      headers["Content-Disposition"] = "attachment\; filename=\"#{filename }\""
    end
  end


end