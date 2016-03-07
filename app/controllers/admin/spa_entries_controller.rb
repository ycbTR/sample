class Admin::SpaEntriesController < Admin::ResourceController
  require 'roo'
  skip_before_filter :load_resource

  def index
    @start_date = params[:start_date]
    @end_date = params[:end_date]
    if params[:commit] == "Search"
      if @start_date.present? && @end_date.present? 
        set_dates
        @lot_numbers = LotNumber.where(created_at: (@start_date)..(@end_date), mass_num: !nil)
      end
    elsif params[:commit] == "Delete"
      if @start_date.present? && @end_date.present? 
        set_dates
        LotNumber.destroy_all(created_at: (@start_date)..(@end_date))
        redirect_to admin_spa_entries_path
      end
    end
  end

  def create
    if params[:file].present?
      file_type = params[:file].original_filename.split(".").last
      if params[:file].present? && (file_type == "xls" || file_type == "xlsx")
        file_type == "xlsx" ? file = Roo::Spreadsheet.open(params[:file].path, :extension => :xlsx) : file = Roo::Spreadsheet.open(params[:file].path, :extension => :xls)
        LotNumber.mass_assign(file)
        flash[:success] = "Data imported successfully!!!"
        redirect_to :back
      else  
        flash[:error] = "Invalid File. Please Upload an xls or xlsx file."
        redirect_to :back
      end
    else
      flash[:error] = "Empty File. Please Upload an xls or xlsx file."
      redirect_to :back
    end
  end

  def set_dates
    @start_date = ActiveSupport::TimeZone.new("Australia/Sydney").local_to_utc(@start_date.to_time.beginning_of_day)
    @end_date = ActiveSupport::TimeZone.new("Australia/Sydney").local_to_utc(@end_date.to_time.end_of_day)
  end

end
