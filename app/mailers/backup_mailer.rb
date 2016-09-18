class BackupMailer < ActionMailer::Base
  default from: "SeedBank <dookieseedbank@gmail.com>"
  default bcc: Setting.default_mail_bcc

  def send_backup(filename_with_path)
    filename = filename_with_path.split("/").last
    subject = "SeedBank Backup #{filename.split("_").first}"
    attachments["#{filename}"] = File.read("#{filename_with_path}")
    mail(:body => 'Please find dump file in attachment', :to => Setting.default_mail_to, :subject => subject)
  end
end