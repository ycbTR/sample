class Admin::OrdersController < Admin::ResourceController

  private

  def set_q
    params[:q] ||= {}
    params[:q][:s] ||= "created_at desc"
  end


end
