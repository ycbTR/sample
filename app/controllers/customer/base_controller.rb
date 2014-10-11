class Customer::BaseController < ApplicationController
  before_filter :authorize_customer
  before_filter :person_required

  private

  def authorize_customer
    if !@current_user.customer?
      flash[:alert] = "You are unauthorized to view this page!"
      redirect_to root_path and return
    end
  end

  def person_required
    if @current_user.person.blank?
      # redirect to person path
    end
  end

end