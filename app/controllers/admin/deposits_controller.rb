class Admin::DepositsController < Admin::ResourceController
  before_filter :collector_required!, only: [:new, :edit]
  before_filter :lot_number_required!, only: [:new, :edit]
  before_filter :plant_required!, only: [:new, :edit]
  before_filter :save_before, only: [:new, :edit]

  private

  def modal_title
    "#{params[:action].titleize} field data sheet"
  end

  def set_q
    params[:q] ||= {}
    params[:q][:s] ||= "updated_at desc"
    params[:q][:deleted_at_null] = true
  end

  def save_before
    @lot_numbers = LotNumber.where("id NOT IN(?)", Deposit.pluck(:lot_number_id) +[-1]).order("number asc")
    if @lot_numbers.blank?
      flash[:warning] = "Lot Number is required to continue."
      if request.xhr?
        js_redirect_to(new_admin_lot_number_path) and return
      else
        redirect_to new_admin_lot_number_path and return
      end
    end
    @collectors = Person::Collector.all
    @plants = Plant.order("species asc")
  end

end
