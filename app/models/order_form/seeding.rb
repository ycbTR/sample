class OrderForm::Seeding < OrderForm
  after_create :create_order

end