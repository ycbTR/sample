class Asset < ActiveRecord::Base
  attr_accessible :attachment, :user_id, :type, :viewable

  belongs_to :user
  belongs_to :viewable, :polymorphic => true

  def self.not_deleted
    where(:deleted_at => nil)
  end

end