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
