# == Schema Information
#
# Table name: order_forms
#
#  id                 :integer          not null, primary key
#  type               :string(255)
#  officer_name       :string(255)
#  officer_number     :string(255)
#  officer_address    :text
#  landholder_name    :string(255)
#  landholder_number  :string(255)
#  landholder_address :text
#  property_address   :text
#  hectare            :string(255)
#  kilometer          :string(255)
#  grams_per_km       :string(255)
#  sb_no              :string(255)
#  pon                :string(255)
#  business_name      :string(255)
#  abn                :string(255)
#  payer              :string(255)
#  email              :string(255)
#  mobile             :string(255)
#  comments           :text
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  order_id           :integer
#

class OrderForm::Seeding < OrderForm
  after_create :create_order

end
