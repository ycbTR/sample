class Admin::SpaEntriesController < Admin::ResourceController
  require 'roo'
  skip_before_filter :load_resource

  def index
    @start_date = params[:start_date]
    @end_date = params[:end_date]
    if params[:commit] == "Search"
      if @start_date.present? && @end_date.present? 
        set_dates
        @lot = LotNumber.where(created_at: (@start_date)..(@end_date))
        @lot_numbers = @lot.where("mass_num > ?", 0).order(:created_at)
        respond_to do |format|
          format.js {}
          format.html {}
          format.xls do
            filename = "SS_Spa_Entries_from_#{(@start_date+1.days).strftime('%m-%d-%Y')}_to_#{@end_date.strftime('%m-%d-%Y')}"
            response.headers['Content-Disposition'] = 'attachment; filename="' + filename + '.xls"'
          end
        end
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
        row = 1
        errors = []
        lot_numbers = []
        lot_number_exist = []
        plant_ids = Plant.pluck(:id)
        collector_ids = Person::Collector.pluck(:id)
        lot_number_num = LotNumber.pluck(:number)
        loop do
          row += 1
          current_row = file.row(row)
          break if current_row[3] == nil
          lot_number_exist << current_row[0] if current_row[0].present? && lot_number_num.include?(current_row[0].to_i)
          errors << row unless collector_ids.include? current_row[1].to_i
          errors << row unless plant_ids.include? current_row[3].to_i
          current_row[2].to_date rescue errors << row
          Integer(current_row[0]) rescue errors << row unless current_row[0].nil?
          Float(current_row[8]) rescue errors << row
        end
        if errors.count == 0 && lot_number_exist.count == 0
          LotNumber.mass_assign(file)
          flash[:success] = "Data imported successfully!!!"
          redirect_to :back
        else
          flash[:error] = "Please correct #{errors.uniq.to_sentence} line(s).Lot Number(s) #{lot_number_exist.uniq.to_sentence} already exists."
          redirect_to :back
        end
      else  
        flash[:error] = "Invalid File. Please Upload an xlsx file."
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

  def validate_ss

  end
end