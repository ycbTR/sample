namespace :db do

  desc "Dumps the database to db/APP_NAME.dump"
  task :dump => :environment do
    cmd = nil
    filename = ""
    with_config do |app, host, db, user, password|
      filename = "#{Rails.root}/db/backups/#{Time.now.strftime("%Y%m%d%H%M%S")}_#{app}.dump"
      cmd = "PGPASSWORD='#{password}' pg_dump --host #{host} --username #{user} --verbose --clean --no-owner --no-acl --format=c #{db} > #{filename}"
    end
    puts filename
    puts cmd
    exec cmd
    BackupMailer.send_backup(filename).deliver
  end

  private

  def with_config
    yield Rails.application.class.parent_name.underscore,
      ActiveRecord::Base.connection_config[:host],
      ActiveRecord::Base.connection_config[:database],
      ActiveRecord::Base.connection_config[:username],
      ActiveRecord::Base.connection_config[:password]
  end
end