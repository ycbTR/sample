class BackupJob
  include SuckerPunch::Job

  def perform()
    exportdb = nil
    filename = nil
    with_config do |app, host, db, user, password|
      filename = "#{Rails.root}/db/backups/#{Time.current.strftime("%d-%m-%Y_%H:%M")}_#{app}.dump"
      exportdb = "PGPASSWORD='#{password}' pg_dump --host #{host} --username #{user} --verbose --clean --no-owner --no-acl --format=c #{db} > #{filename}"
    end
    puts filename
    puts exportdb
    system exportdb
    importdb = nil
    dropdb = nil
    createdb = nil
    with_config do |app, host, db, user, password|
      importdb = "PGPASSWORD='#{password}' pg_restore --verbose --host #{host} --username #{user} --clean --no-owner --no-acl --dbname seedbank_staging #{filename}"
      dropdb = "PGPASSWORD='#{password}' dropdb --host #{host} --username #{user} seedbank_staging"
      createdb = "PGPASSWORD='#{password}' createdb --host #{host} --username #{user} seedbank_staging"
    end
    puts dropdb
    system dropdb
    puts createdb
    system createdb
    puts importdb
    system importdb
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