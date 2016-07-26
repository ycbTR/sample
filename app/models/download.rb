class Download < ActiveRecord::Base
  attr_accessible :file, :file_name, :comments, :type, :viewable
  has_attached_file :file
  
end