class Admin::SpaEntriesController < Admin::ResourceController
  require 'roo'
  skip_before_filter :load_resource

  def index
    max_mass_num = LotNumber.maximum("mass_num")
    if max_mass_num == nil
      @lot_numbers = []
    else
      @lot_numbers = LotNumber.where(mass_num: max_mass_num)
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
end
