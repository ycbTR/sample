class Admin::LotNumbersController < Admin::ResourceController

  def bulk_import
    if request.post?
      ((params[:start].to_i)..(params[:end].to_i)).each do |number|
        LotNumber.create(number: number)
      end
      flash[:success] = "Successfully created lot numbers"
      redirect_to admin_lot_numbers_path
    else
      respond_to do |format|
        format.js {render_default_modal_form("Create Bulk Lot Numbers")}
      end
    end
  end

  private

  def set_q
    params[:q] ||= {}
    params[:q][:s] ||= "number asc"
  end
end
