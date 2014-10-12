module SeedBank::DeviseAuth
  def authenticate
    if current_user
      return true if current_user.admin?
      flash[:error] = "Not Authorized"
      redirect_to root_path
    else
      scope = Devise::Mapping.find_scope!(:user)
      session["#{scope}_return_to"] = "/cms-admin" # if localized...
      redirect_to new_user_session_path
    end
  end
end
