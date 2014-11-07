class Admin::PeopleController < Admin::ResourceController
  skip_before_filter :load_resource
  before_filter :type_cont
  before_filter :load_resource

  private


  def type_cont
    @type = (params[:q][:type_cont] ||= "Collector")
  end

  def find_resource
    "Person::#{type_cont}".constantize.find(params[:id])
  end

  def build_resource
    "Person::#{type_cont}".constantize.new(params[object_name])
  end

  def location_after_save
    admin_people_path(q: {type_cont: type_cont})
  end

  def object_name
    "person_#{type_cont.downcase}"
  end


  def collection_url(options = {})
    polymorphic_url([:admin, model_class], {q: {type_cont: type_cont}})
  end


end
