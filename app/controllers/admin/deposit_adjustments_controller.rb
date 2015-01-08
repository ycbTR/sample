class Admin::DepositAdjustmentsController < Admin::ResourceController
  before_filter :collector_required!, only: [:new, :edit]
  before_filter :lot_number_required!, only: [:new, :edit]
  before_filter :plant_required!, only: [:new, :edit]
  create.before :set_defaults
  update.before :set_defaults


  def destroy
    if @object.reverse!
      flash[:success] = "Successfully reversed"
      respond_with(@object) do |format|
        format.html { redirect_to collection_url }
        format.js { render :partial => "shared/destroy" }
      end
    else
      @error_presence_for_response = true
      respond_with(@object) do |format|
        format.html { redirect_to collection_url }
      end
    end
  end


  private


  def build_resource
    res = model_class.new(params[object_name])
    res.deposit_id ||= (params[:q][:deposit_id_eq] rescue nil)
    res
  end


  def location_after_save
    admin_deposit_adjustments_path(q: {deposit_id_eq: @object.deposit_id})
  end

  def collection
    @search = DepositAdjustment.eager_load(:user, :deposit => [:lot_number, :plant]).ransack(params[:q])
    @search.result(distinct: true).page(params[:page]).per(15)
  end


  def collection_url
    admin_deposit_adjustments_path(q: {deposit_id_eq: @object.try(:deposit_id)})
  end

  def set_defaults
    @object.user = User.current
  end

  def js_response
    if params[:action].in?("new", "edit", "show")
      render_default_modal_form(modal_title || "#{params[:action].titleize} #{object_name}")
    else
      super
    end
  end

  def modal_title
    if params[:action].in?("new", "edit")
      "#{params[:action].titleize} Adjustment"
    else
      "Details"
    end
  end

end
