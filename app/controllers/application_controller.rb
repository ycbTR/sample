class ApplicationController < ActionController::Base
  protect_from_forgery
  auto_session_timeout 20.minutes
  before_filter :set_current_user
  before_filter :remove_role_param

  def set_current_user
    @current_user = current_user
  end

  def render_default_modal_form(title = nil, target = nil, options = {})
    @title = title
    target ||= "#{params[:controller]}/#{params[:action]}"
    render :partial => "/shared/default_modal_form", :locals => {:target => target, :options => options}
  end

  def js_redirect_to(path)
    render text: "window.location.href='#{path}'"
  end


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

  def remove_role_param
    if params[:user] && !@current_user.try(:admin?)
      params[:user].delete :role
    end
  end

end
