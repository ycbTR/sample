class Admin::OrderFormsController < Admin::ResourceController

  private

  def location_after_save
    edit_admin_order_path(@object.order)
  end

  def set_q
    params[:q] ||= {}
    params[:q][:s] ||= "species asc"
  end
end
