class Setting < RailsSettings::CachedSettings
	attr_accessible :var, :value

  Setting.direct_seeding_base_price = 715


end
