class Admin::BaseController < ApplicationController
  before_filter :authenticate_user!
  before_filter :authorize_admin

  private

  def flash_message_for(object, event_sym)
    resource_desc = object.class.model_name.human
    resource_desc += " \"#{object.name}\"" if object.respond_to?(:name) && object.name.present?
    I18n.t(event_sym, :resource => resource_desc)
  end

  def render_js_for_destroy
    render :partial => '/shared/destroy'
  end


  #TODO admin
  def authorize_admin
    if !@current_user.admin?
      flash[:alert] = "You are unauthorized to view this page!"
      redirect_to root_path and return
    end
  end
end