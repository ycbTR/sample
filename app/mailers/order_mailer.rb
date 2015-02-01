class OrderMailer < ActionMailer::Base
  default from: "SeedBank <projects@yigitbacakoglu.com>"
  default bcc: Setting.default_mail_bcc

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
    mail(:to => Setting.default_mail_to, :subject => subject)
  end

end