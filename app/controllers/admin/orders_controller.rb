class Admin::OrdersController < Admin::ResourceController
  before_filter :load_previous_orders, only: :edit

  private

  def set_q
    params[:q] ||= {}
    params[:q][:s] ||= "created_at desc"
  end

  def location_after_save
    edit_admin_order_path(@order)
  end

  def load_previous_orders
    @orders = @order.customer.orders
  end

end
