class Admin::OrdersController < Admin::ResourceController
  before_filter :load_previous_orders, only: :edit
  before_filter :load_deposits, only: [:new, :edit]
  update.fails :failed_update

  def create
    invoke_callbacks(:create, :before)
    if @object.customer.save
      # @object.new
      @object.customer_id = @object.customer.id
      invoke_callbacks(:create, :after)
      respond_with(@object) do |format|
        format.js { render_default_modal_form("SELECT ORDER FORM TYPE") }
      end
    else
      @error_presence_for_response = true
      invoke_callbacks(:create, :fails)
      respond_with(@object) do |format|
        format.js { render_default_ujs_response("#{params[:controller]}/new", "SELECT ORDER FORM TYPE") }
      end
    end
  end

  def print
    respond_to do |format|
      format.html { render :print, layout: false }
    end
  end

  private

  def set_q
    params[:q] ||= {}
    params[:q][:state_not_eq] ||= "new"
    params[:q][:s] ||= "created_at desc"
  end

  def location_after_save
    edit_admin_order_path(@order)
  end

  def load_previous_orders
    @orders = @order.customer.orders
  end

  def load_deposits
    if seeding?
      @type = "seeding"
      #@deposits = Deposit.seeding.active
      # As requested, I've removed Seedable control
      @deposits = Deposit.nursery.active
    else
      @type = "nursery"
      @deposits = Deposit.nursery.active
    end

  end

  def seeding?
    return false if @order.form_type.eql?("Nursery")
    @order.form_type.eql?('seeding') || params[:type].blank? || params[:type].eql?('seeding')
  end

  def failed_update
    load_previous_orders
    load_deposits
  end

end
