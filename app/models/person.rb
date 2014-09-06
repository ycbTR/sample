class Person < ActiveRecord::Base
  attr_accessible :address_1, :address_2, :email, :first_name, :last_name, :phone, :postcode, :town, :type
end
