class Person < ActiveRecord::Base
  attr_accessible :address_1, :address_2, :email, :first_name, :last_name, :phone, :postcode, :town, :type

  def full_name
    "#{first_name} #{last_name}"
  end

end
