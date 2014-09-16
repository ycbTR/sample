class HomeController < ApplicationController


  def index
    flash[:warning] = "Lot Number is required to continue."

  end

end