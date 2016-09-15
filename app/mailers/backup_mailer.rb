class BackupMailer < ActionMailer::Base
  default from: "SeedBank <dookieseedbank@gmail.com>"
  default bcc: Setting.default_mail_bcc

  def send_backup(filename)
    subject = "SeedBank Backup #{filename.split("_").first}"
    attachments["#{filename}"] = File.read("#{filename}")
    mail(:to => "satyakaam.parikh@gmail.com", :subject => subject)
  end
end