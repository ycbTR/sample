class Admin::DepositsController < Admin::ResourceController
  before_filter :collector_required!, only: [:new, :edit]
  before_filter :lot_number_required!, only: [:new, :edit]
  before_filter :plant_required!, only: [:new, :edit]

end
