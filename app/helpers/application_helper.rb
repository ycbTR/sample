module ApplicationHelper

  def format_date(date = nil)
    return "" if date.nil?
    date.strftime("%d/%m/%Y")
  end

  def format_date_with_time(date = nil)
    return "" if date.nil?
    date.strftime("%d/%m/%Y %H:%M")
  end

  #Adds line breaks to text
  def format_text(text)
    h(text.to_s).gsub(/\n/, '<br>').html_safe
  end

end
