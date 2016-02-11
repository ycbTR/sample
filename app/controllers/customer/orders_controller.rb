class Customer::OrdersController < Customer::BaseController
  skip_before_filter :authenticate_user!,:person_required, only: :index
  before_filter :custom_authenticate_user
  before_filter :person_required

  def index
    if current_user.admin?
      redirect_to admin_orders_path(n: params[:n]) and return
      end
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

  def custom_authenticate_user
    redirect_to new_user_registration_path unless current_user.present?
  end
end