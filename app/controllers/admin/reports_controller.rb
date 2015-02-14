class Admin::ReportsController < Admin::BaseController
  helper 'reporting'

  def index

  end


  def spa_populations
    @lot_numbers = LotNumber.eager_load(:deposits, :heritages).where("lot_numbers.spa_name IS NOT NULL AND lot_numbers.spa_name != '' ")
    unless params[:format] == "xls"
      @lot_numbers.page(params[:page])
    end
  end

end