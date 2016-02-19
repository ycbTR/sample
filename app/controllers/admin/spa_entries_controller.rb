class Admin::SpaEntriesController < Admin::ResourceController
  require 'roo'
  skip_before_filter :load_resource

  def index
  end

  def create
    file_type = params[:file].original_filename.split(".").last
    p file_type
    if params[:file].present? && (file_type == "xls" || file_type == "xlsx")
      file_type == "xlsx" ? file = Roo::Spreadsheet.open(params[:file].path, :extension => :xlsx) : file = Roo::Spreadsheet.open(params[:file].path, :extension => :xls)
    else  
      flash[:error] = "Empty File. Please Upload an xls or xlsx file."
      redirect_to :back
    end
    # p 1111111111111111111
    # p file
    # p file.sheets.first
    # file.each_row_streaming(offset: 1) do |row| # Will exclude first (inevitably header) row
    #   p "---------------------row"
    #   puts row.inspect # Array of Excelx::Cell objects
    # end
  end
end
