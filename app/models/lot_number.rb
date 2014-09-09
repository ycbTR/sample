class LotNumber < ActiveRecord::Base
  attr_accessible :location, :number, :provenance, :region
  has_many :line_items


  def display
    "#{self.number}"
  end
end
