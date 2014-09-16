# == Schema Information
#
# Table name: assets
#
#  id                      :integer          not null, primary key
#  attachment_file_name    :string(255)
#  attachment_content_type :string(255)
#  attachment_file_size    :integer
#  attachment_updated_at   :datetime
#  user_id                 :integer
#  type                    :string(255)
#  viewable_id             :integer
#  viewable_type           :string(255)
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#

class Asset < ActiveRecord::Base
  attr_accessible :attachment, :user_id, :type, :viewable

  belongs_to :user
  belongs_to :viewable, :polymorphic => true

  def self.not_deleted
    where(:deleted_at => nil)
  end

end
