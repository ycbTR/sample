class Setting < RailsSettings::CachedSettings
  attr_accessible :var, :value

  Setting.direct_seeding_base_price = 715
  Setting.address = "The University of Melbourne, Victoria, 3647"
  Setting.email = "seedbank@gvce.com.au"
  Setting.telephone = "(03) 5833 9279"
  Setting.fax = "(03) 5833 9201"
  Setting.region_maps_url = "www.gbcma.vic.gov.au/revegetation"
  #Setting.service_regions = "www.gbcma.vic.gov.au/revegetation"
  Setting.minimum_order_fee = 25


=begin
      <b class="bold-black">GG</b> - Ghin Ghin <b class="bold-black">M</b> - Mansfield
      <b class="bold-black">P</b> - Pyalong <b class="bold-black">Y</b> - Yea
=end

end
