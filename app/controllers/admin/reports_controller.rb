class Admin::ReportsController < Admin::BaseController
  helper 'reporting'

  def index

  end


  def spa_populations
    @lot_numbers = LotNumber.eager_load(:deposits, :heritages).
        where("lot_numbers.spa_name IS NOT NULL AND lot_numbers.spa_name != '' ").
        order('lot_numbers.spa_name', 'lot_numbers.number', 'lot_numbers.region', 'lot_numbers.provenance')
    unless params[:format] == "xls"
      @lot_numbers = @lot_numbers.page(params[:page])
    end
  end

  def seed_deposits
    @start_date = params[:start_date]
    @end_date = params[:end_date]
    if @start_date.present? && @end_date.present?
      set_dates
      @deposits = Deposit.active.
          joins(:lot_number, :plant, :collector).
          includes(:lot_number, :plant, :collector).
          where(date: (@start_date)..(@end_date)).
          order(:collector_id, "lot_numbers.region")
      unless params[:format] == "xls"
        @deposits = @deposits.page(params[:page])
      end
    else
      @invalid_date = true
    end
  end

  def seed_deposits_by_date_entered
    @start_date = params[:start_date]
    @end_date = params[:end_date]
    if @start_date.present? && @end_date.present?
      set_dates
      @deposits = Deposit.active.
          joins(:lot_number, :plant, :collector).
          includes(:lot_number, :plant, :collector).
          where(created_at: (@start_date)..(@end_date)).
          order(:collector_id, "lot_numbers.region")
      unless params[:format] == "xls"
        @deposits = @deposits.page(params[:page])
      end
    else
      @invalid_date = true
    end
  end

  def nursery_seed_sales
    @type = "OrderForm::Nursery"
    prepare_data
  end

  def direct_seed_sales
    @type = "OrderForm::Seeding"
    prepare_data
  end

  def seed_containment
    @deposits = Deposit.active.joins(:lot_number, :plant, :collector).includes(:lot_number, :plant, :collector).
        where("( deposits.cached_qty_bank + deposits.cached_qty_consigned ) > 0").
        order('lot_numbers.region', "plants.species")
    unless params[:format] == "xls"
      @deposits = @deposits.page(params[:page])
    end
  end

  def seeds_on_consignment
    @deposits = Deposit.active.joins(:lot_number, :plant, :collector).eager_load(:lot_number, :plant, :collector, :deposit_adjustments).
        where("( deposits.cached_qty_consigned ) > 0").
        order('deposits.date')
    unless params[:format] == "xls"
      @deposits = @deposits.page(params[:page])
    end
  end

  def seeds_on_hold
    @deposits = Deposit.active.joins(:lot_number, :plant, :collector).eager_load(:lot_number, :plant, :collector, :deposit_adjustments).
        where("( deposits.cached_qty_onhold ) > 0").
        order('lot_numbers.region', "plants.species")
    unless params[:format] == "xls"
      @deposits = @deposits.page(params[:page])
    end
  end


  #To show on catalogues
  def total_quantity
    cached_qty_bank.to_f + cached_qty_consigned.to_f
  end

  private

  def prepare_data
    @start_date = params[:start_date]
    @end_date = params[:end_date]

    if @start_date.present? && @end_date.present?
      set_dates
      @order_forms = OrderForm.joins(:order).includes(:order => :line_items).
          where("order_forms.type" => @type).
          where("orders.completed_at" => (@start_date)..(@end_date)).
          where("orders.state = ?", 'completed').order(:business_name, "orders.completed_at")

      unless params[:format] == "xls"
        @order_forms = @order_forms.page(params[:page])
      end

    else
      @invalid_date = true
    end
  end


  def set_dates
    @start_date = ActiveSupport::TimeZone.new("Australia/Sydney").local_to_utc(@start_date.to_time.beginning_of_day)
    @end_date = ActiveSupport::TimeZone.new("Australia/Sydney").local_to_utc(@end_date.to_time.end_of_day)
  end


end