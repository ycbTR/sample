class Customer::BaseController < ApplicationController
  before_filter :authenticate_user!
  before_filter :person_required

  private


  def person_required
    if @current_user.person.blank?
      flash[:warning] = "Please complete your profile details to place a new order"
      redirect_to customer_profile_path(:return_to => request.fullpath) and return
    end
  end

end