class Admin::OrdersController < Admin::ResourceController
  before_filter :load_previous_orders, only: :edit
  before_filter :load_deposits, only: [:new, :edit]

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

  def load_deposits
    if seeding?
      @type = "seeding"
      @deposits = Deposit.joins(:plant, :lot_number).where("#{LotNumber.table_name}.spa_specific = ?", false).where("#{Plant.table_name}.direct_seedable = ?", true)
    else
      @type = "nursery"
      @deposits = Deposit.joins(:plant, :lot_number).where("#{LotNumber.table_name}.spa_specific = ?", false)
    end

  end

  def seeding?
    @order.form_type.eql?('seeding') || params[:type].blank? || params[:type].eql?('seeding')
  end

end
