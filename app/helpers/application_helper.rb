module ApplicationHelper

  def format_date(date = nil)
    return "-" if date.nil?
    date.strftime("%d/%m/%Y")
  end

  def format_date_with_time(date = nil)
    return "-" if date.nil?
    date.strftime("%d/%m/%Y %H:%M")
  end

  #Adds line breaks to text
  def format_text(text)
    h(text.to_s).gsub(/\n/, '<br>').html_safe
  end

  def link_to_add_fields(name, f, type)
    new_object = f.object.send "build_#{type}"
    id = "new_#{type}"
    fields = f.send("#{type}_fields", new_object, child_index: id) do |builder|
      render(type.to_s + "_fields", f: builder)
    end
    link_to(name, '#', class: "add_fields", data: {id: id, fields: fields.gsub("\n", "")})
  end

  def human_boolean(boolean)
    boolean ? 'Yes' : 'No'
  end


end
