class Customer::OrderFormsController < Customer::BaseController
  skip_before_filter :person_required, only: :profile

  def new
    build_order
    OrderForm.accessible_attributes
    if @current_order.customer
      @current_order.assign_attributes((((@current_order.customer).order_forms.of_type(@current_order.type).last.attributes.except('pon', 'id', 'type', 'hectare', 'kilometer', 'grams_per_km', 'comments')) rescue {}), without_protection: true)
    end
  end


  def complete
    build_order
    if @current_order.update_attributes(params[:order_form]) && @current_order.reload.complete
      session.delete :order_id
      flash[:success] = "Successfully placed an order."
      if @current_user.admin?
        redirect_to edit_admin_order_path(@current_order.reload.order)
      else
        redirect_to customer_orders_path
      end
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
      redirect_to (params[:return_to] || customer_profile_path)
    end
  end


  private

  def build_order
    @current_order = (params[:order_form][:type]).constantize.new rescue ("OrderForm::#{(params[:type] || 'seeding').titleize}").constantize.new rescue OrderForm.new
    @current_order.customer_id = params[:cid].present? ? params[:cid] : @current_user.customer.id

    if @current_order.type == "OrderForm::Seeding"
      # if Rails.env.production?
        ids = Deposit.select("DISTINCT ON(plant_id) *").pluck(:id)
        @deposits = Deposit.seeding.active.where(id: ids).uniq
      # else
      #   @deposits = Deposit.seeding.active.group(:plant_id).uniq
      # end
    else
      @deposits = Deposit.nursery.active
    end
    @deposits = @deposits.order("plants.species asc")
  end

end