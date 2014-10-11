class Customer::OrdersController < Customer::BaseController
  def index
    @orders = Order.where(:order_form_id => @current_user.order_form_ids)
  end

  def show
      @order = Order.where(:order_form_id => @current_user.order_form_ids, number: params[:id]).first
  end

end