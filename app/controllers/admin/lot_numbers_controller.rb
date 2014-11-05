class Admin::LotNumbersController < Admin::ResourceController


  private

  def set_q
    params[:q] ||= {}
    params[:q][:s] ||= "number asc"
  end
end
