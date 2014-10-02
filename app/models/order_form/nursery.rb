class OrderForm::Nursery < OrderForm
  after_create :create_order


end