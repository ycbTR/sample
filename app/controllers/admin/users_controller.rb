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

  end
end
