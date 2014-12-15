class OrderMailer < ActionMailer::Base
  default from: "SeedBank <projects@yigitbacakoglu.com>"
  default bcc: "ycbacakoglu@gmail.com"

  def notify_processed(order)
    #@order = order
    #@customer = order.customer
    #subject = "Your order is updated ##{order.number}"
    #mail(:to => @customer.email, :subject => subject)
  end

  def new_order_to_customer(order_form)
    #@order_form, @order = order_form, order_form.order
    #subject = "Received your order ##{@order.number}"
    #mail(:to => @customer.email, :subject => subject)
  end

  def new_order_to_admin(order_form)
    @order_form, @order = order_form, order_form.order
    subject = "New Order ##{@order.number}"
    mail(:to => Rails.env.development? ? "ycbacakoglu@gmail.com" : "w.paton@gmail.com", :subject => subject)
  end

end