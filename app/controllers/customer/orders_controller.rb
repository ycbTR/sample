class Customer::OrdersController < Customer::BaseController
  def index
    @orders = Order.where(:order_form_id => @current_user.order_form_ids)
  end

  def show
    load_order
  end

  def print
    load_order
    respond_to do |format|
      format.html { render :print, layout: false }
    end
  end

  private

  def load_order
    @order = Order.where(:order_form_id => @current_user.order_form_ids, number: params[:id]).first
  end
end