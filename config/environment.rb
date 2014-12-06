# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
Seedbank::Application.initialize!


ActionMailer::Base.smtp_settings = {
    :address => "smtp.yandex.ru",
    :port => 587,
    :user_name => "projects@yigitbacakoglu.com",
    :password => "projects123",
    :authentication => :plain,
    :enable_starttls_auto => true,
    :host => "yigitbacakoglu.com"

}

Seedbank::Application.configure do
  config.action_mailer.delivery_method = :smtp
  config.action_mailer.raise_delivery_errors = true
end
