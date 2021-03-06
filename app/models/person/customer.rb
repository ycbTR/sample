# == Schema Information
#
# Table name: people
#
#  id         :integer          not null, primary key
#  first_name :string(255)
#  last_name  :string(255)
#  address_1  :string(255)
#  address_2  :string(255)
#  town       :string(255)
#  postcode   :string(255)
#  email      :string(255)
#  phone      :string(255)
#  type       :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

class Person::Customer < Person
  validate :full_name_uniqueness

  def full_name_uniqueness
    if Person::Customer.where('id != ?', self.id).where(:first_name => self.first_name, last_name: self.last_name).present?
      self.errors.add(:base, "Customer's full name must be unique")
    end
  end
end
