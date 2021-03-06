class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter do |c|
    if c.session[:auto_session_expires_at] && c.session[:auto_session_expires_at] < Time.now
      c.send :reset_session
    else
      unless c.url_for(c.params).start_with?(c.send(:active_url))
        offset = (current_user.respond_to?(:auto_timeout) ? current_user.auto_timeout : nil)
        c.session[:auto_session_expires_at] = Time.now + offset if offset && offset > 0
      end
    end
  end

  before_filter :set_current_user
  before_filter :remove_role_param

  def set_current_user
    @current_user = current_user
    User.current = @current_user
  end

  def render_default_modal_form(title = nil, target = nil, options = {})
    @title = title
    target ||= "#{params[:controller]}/#{params[:action]}"
    render :partial => "/shared/default_modal_form", :locals => {:target => target, :options => options}
  end


  def render_default_ujs_response(target = nil, options = {})
    target ||= "#{params[:controller]}/#{@current_action}"
    render :partial => "/shared/default_ujs_response", :locals => {:target => target}
  end


  def collector_required!
    if Person::Collector.where("").blank?
      flash[:warning] = "Collector is required to continue."
      redirect_to new_admin_person_path and return
    end
  end

  def plant_required!
    if Plant.where("").blank?
      flash[:warning] = "Plant is required to continue."
      redirect_to new_admin_plant_path and return
    end
  end

  def deposits_required!
    if Deposit.where("").blank?
      flash[:warning] = "Deposit is required to continue."
      redirect_to new_admin_deposit_path and return
    end
  end

  def lot_number_required!
    if LotNumber.where("").blank?
      flash[:warning] = "Lot Number is required to continue."
      redirect_to new_admin_lot_number_path and return
    end

  end

  def remove_role_param
    if params[:user] && !@current_user.try(:admin?)
      params[:user].delete :role
    end
  end


  def after_sign_in_path_for(resource)
    specific_path(resource)
    super
  end

  def specific_path(resource)
    if resource.customer?
      session['user_return_to'] ||= customer_orders_path
    else
      session['user_return_to'] ||= admin_orders_path
    end
  end

  def js_redirect_to(target)
    render :text => "window.location.href='#{target}'"
  end

end
