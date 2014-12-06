class Admin::PeopleController < Admin::ResourceController
  before_filter :type_cont

  private


  def type_cont
    @type = (params[:q][:type_cont] ||= (params[:type] || "Collector"))
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


  def load_resource
    type_cont
    if member_action?
      @object ||= load_resource_instance
      instance_variable_set("@#{object_name}", @object)
    else
      @collection ||= collection
      instance_variable_set("@#{controller_name}", @collection)
    end
  end



end
