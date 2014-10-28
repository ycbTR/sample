class Customer::OrderFormsController < Customer::BaseController
  skip_before_filter :person_required, only: :profile

  def new
    build_order
  end


  def complete
    build_order
    if @current_order.update_attributes(params[:order_form]) && @current_order.reload.complete
      session.delete :order_id
      flash[:success] = "Successfully placed an order."
      redirect_to customer_orders_path
    else
      render 'new'
    end
  end

  def profile
    @person = @current_user.customer
    @person ||= @current_user.build_customer

    unless request.get?
      params[:person_customer][:type] = "Person::Customer"
      @person.update_attributes(params[:person_customer])
      flash[:success] = "Profile Saved Successfully"
      redirect_to customer_profile_path
    end
  end


  private

  def build_order
    @current_order = (params[:order_form][:type]).constantize.new rescue ("OrderForm::#{(params[:type] || 'seeding').titleize}").constantize.new rescue OrderForm.new
    @current_order.user = @current_user
  end

end