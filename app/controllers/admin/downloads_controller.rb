class Admin::DownloadsController < Admin::ResourceController
  skip_before_filter :authenticate_user!, :authorize_admin, only: :show

  def index
    @downloads = Download.all
  end

  def new
    @download = Download.new
  end

  def create
    @download = Download.new(params[:download])
    if @download.save
      flash[:notice] = "Successfully created product."
      redirect_to admin_downloads_path
    else
      render :action => 'new'
    end
  end

  def show
    @download = Download.find(params[:id])
    send_data @download.file.url,
      :filename => @download.file_file_name,
      :type => @download.file_content_type
  end

  def destroy
    @download = Download.find(params[:id])
    @download.destroy
    flash[:success] = "File removed successfully!!"
    redirect_to admin_downloads_path
  end

  def backup
    BackupJob.perform_async()
    flash[:success] = "Please check your email after sometime for backup!!"
    redirect_to :back
    rescue ActionController::RedirectBackError
      redirect_to root_path
  end
end