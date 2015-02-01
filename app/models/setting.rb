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

end
