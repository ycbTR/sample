class SessionsController < ApplicationController

  def active
    session[:auto_session_expires_at]
    response.headers["Etag"] = "" # clear etags to prevent caching
    render json: {:remaining => ((session[:auto_session_expires_at] - Time.now).to_i * 1000 rescue 0), active: !!current_user}.to_json, status: 200
  end

  def timeout
    flash[:notice] = "Your session has timed out."
    redirect_to new_user_session_path
  end

end
