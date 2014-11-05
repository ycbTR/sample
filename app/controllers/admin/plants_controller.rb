class Admin::PlantsController < Admin::ResourceController

  private

  def set_q
    params[:q] ||= {}
    params[:q][:s] ||= "species asc"
  end
end
