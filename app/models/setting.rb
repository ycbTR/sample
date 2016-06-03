class Setting < RailsSettings::CachedSettings
  attr_accessible :var, :value

  Setting.direct_seeding_base_price ||= 715
  Setting.address ||= "The University of Melbourne, Victoria, 3647"
  Setting.email ||= "seedbank@gvce.com.au"
  Setting.telephone ||= "(03) 5833 9279"
  Setting.fax ||= "(03) 5833 9201"
  Setting.region_maps_url ||= "http://www.gbcma.vic.gov.au/revegetation"
  #Setting.service_regions ||= "www.gbcma.vic.gov.au/revegetation"
  Setting.minimum_order_fee ||= 25
  Setting.default_mail_to ||= "w.paton@gmail.com"
  Setting.default_mail_bcc ||= "w.paton+archive@gmail.com"


  Setting.smtp_host ||= "smtp.sendgrid.net"
  Setting.smtp_port ||= 587
  Setting.smtp_domain ||= "gmail.com"
  Setting.smtp_username ||= "dookieseedbank@gmail.com"
  Setting.smtp_password ||= "r9t6b6c3y"

  after_save :set_email_settings

  def self.set_email_settings

    # ActionMailer::Base.smtp_settings = {
    #     :user_name => 'your_sendgrid_username',
    #     :password => 'your_sendgrid_password',
    #     :domain => 'yourdomain.com',
    #     :address => 'smtp.sendgrid.net',
    #     :port => 587,
    #     :authentication => :plain,
    #     :enable_starttls_auto => true
    # }


    ActionMailer::Base.smtp_settings = {
        :address => Setting.smtp_host,
        :port => Setting.smtp_port,
        :user_name => Setting.smtp_username,
        :password => Setting.smtp_password,
        :authentication => :plain,
        :enable_starttls_auto => true
    }
  end

  def set_email_settings
    Setting.set_email_settings
  end

end
