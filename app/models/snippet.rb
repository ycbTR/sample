# == Schema Information
#
# Table name: snippets
#
#  id         :integer          not null, primary key
#  slug       :string(255)      not null
#  identifier :string(255)      not null
#  excerpt    :text
#  content    :text
#  position   :integer          default(0), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Snippet < ActiveRecord::Base
  attr_accessible :label, :slug, :identifier, :excerpt, :content, :position

  before_create :assign_position
  default_scope order("position desc")


  def self.for_identifier(identifier)
    where(identifier: identifier)
  end

  private

  def assign_position
    max = Snippet.maximum(:position)
    self.position = max ? max + 1 : 0
  end

end
