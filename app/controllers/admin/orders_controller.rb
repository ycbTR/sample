class Admin::OrdersController < Admin::ResourceController

  private

  def set_q
    params[:q] ||= {}
    params[:q][:s] ||= "created_at desc"
  end

  def location_after_save
    edit_admin_order_path(@order)
  end

end
