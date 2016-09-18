module ApplicationHelper

  def format_date(date = nil)
    return "-" if date.nil?
    date.strftime("%d/%m/%Y")
  end

  def render_errors(target)
    render(partial: "shared/errors", locals: {target: target})
  end

  ALERT_TYPES = [:error, :info, :success, :warning, :danger]

  def v2_bootstrap_flash
    flash_messages = []
    flash.each do |type, message|
      # Skip empty messages, e.g. for devise messages set to nothing in a locale file.
      next if message.blank?

      type = :success if type == :notice
      type = :warning if type == :alert
      type = :danger if type == :error
      next unless ALERT_TYPES.include?(type)

      Array(message).each do |msg|
        text = content_tag(:div,
                           content_tag(:button, raw("&times;"), :class => "close", "data-dismiss" => "alert") +
                               msg.html_safe, :class => "alert fade in alert-#{type}")
        flash_messages << text if msg
      end
    end
    flash_messages.join("\n").html_safe
  end


  def export_to_excel_link(format = 'xls', without_current_user = false, invoice = false)
    if (@current_user && @current_user.staff?) || without_current_user
      link_to current_url(format: format.to_s, invoice: invoice) do
        "<i class='fa fa-file-excel-o'></i>".html_safe
      end.html_safe
    end
  end

  def current_url(new_params = {})
    url_for params.merge(new_params)
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
