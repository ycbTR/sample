class Admin::DepositAdjustmentsController < Admin::ResourceController
  before_filter :collector_required!, only: [:new, :edit]
  before_filter :lot_number_required!, only: [:new, :edit]
  before_filter :plant_required!, only: [:new, :edit]
  create.before :set_defaults
  update.before :set_defaults

  private


  def build_resource
    res = model_class.new(params[object_name])
    res.deposit_id ||= (params[:q][:deposit_id_eq] rescue nil)
    res
  end


  def location_after_save
    admin_deposit_adjustments_path(q: {deposit_id_eq: @object.deposit_id})
  end

  def collection_url
    admin_deposit_adjustments_path(q: {deposit_id_eq: @object.try(:deposit_id)})
  end

  def set_defaults
    @object.user = User.current
  end

end
