module Admin
  class UsersController < Admin::ResourceController
    update.before :remove_password
    private


    def remove_password
      if params[:user] && params[:user][:password].blank?
        params[:user].delete :password
        params[:user].delete :password_confirmation
      end
    end

    def js_response
      if params[:action].in?("new", "edit")
        render_default_modal_form("#{params[:action].titleize} User")
      else
        super
      end
    end

  end
end
