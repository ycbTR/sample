# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
Seedbank::Application.initialize!

Setting.set_email_settings

Seedbank::Application.configure do
  config.action_mailer.delivery_method = :smtp
  config.action_mailer.raise_delivery_errors = true
end
