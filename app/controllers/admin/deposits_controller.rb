class Admin::DepositsController < Admin::ResourceController
  before_filter :collector_required!, only: [:new, :edit]
  before_filter :lot_number_required!, only: [:new, :edit]
  before_filter :plant_required!, only: [:new, :edit]

  private

  def modal_title
    "#{params[:action].titleize} field data sheet"
  end

  def set_q
    params[:q] ||= {}
    params[:q][:s] ||= "updated_at desc"
    params[:q][:deleted_at_null] = true
  end


end
