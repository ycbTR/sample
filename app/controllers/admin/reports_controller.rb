class Admin::ReportsController < Admin::BaseController
  helper 'reporting'

  def index

  end


  def spa_populations
    @lot_numbers = LotNumber.eager_load(:deposits, :heritages).where("lot_numbers.spa_name IS NOT NULL AND lot_numbers.spa_name != '' ")
    unless params[:format] == "xls"
      @lot_numbers = @lot_numbers.page(params[:page])
    end
  end

  def seed_deposits
    start_date = params[:start_date]
    end_date = params[:end_date]
    if start_date.present? && end_date.present?
      @deposits = Deposit.joins(:lot_number, :plant, :collector).includes(:lot_number, :plant, :collector).where(date: start_date..end_date).order(:collector_id, "lot_numbers.region")
      unless params[:format] == "xls"
        @deposits = @deposits.page(params[:page])
      end
    else
      @invalid_date = true
    end
  end

end