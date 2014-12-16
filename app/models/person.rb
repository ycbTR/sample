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

class Person < ActiveRecord::Base
  attr_accessible :address_1, :address_2, :email,
                  :first_name, :last_name, :phone, :postcode, :town, :type, :user_id
  belongs_to :user
  has_many :orders, foreign_key: "customer_id"
  has_many :deposits, foreign_key: "collector_id"
  before_destroy :check_destroy_validations

  class DestroyWithOrdersError < StandardError;
  end
  class DestroyWithDepositsError < StandardError;
  end

  ransacker :full_name do |parent|
    Arel::Nodes::InfixOperation.new('||',
                                    Arel::Nodes::InfixOperation.new('||', parent.table[:first_name], ' '),
                                    parent.table[:last_name])
  end

  def full_name
    "#{first_name} #{last_name}"
  end

  alias_method :fullname, :full_name

  def check_completed_orders
    raise DestroyWithOrdersError if self.orders.present?
  end
  def check_deposits
    raise DestroyWithDepositsError if self.deposits.present?
  end

  def check_destroy_validations
    check_completed_orders
    check_deposits
  end




end
