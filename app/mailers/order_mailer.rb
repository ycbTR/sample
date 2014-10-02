class OrderMailer < ActionMailer::Base

  def notify_processed(order)
    @order = order
    @customer = order.customer
    subject = "Your order is updated - Seedbank"
    mail(:to => @customer.email, :subject => subject)
  end
end