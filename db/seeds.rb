# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Snippet.delete_all
%w(who_we_are contact facebook twitter).each do |identifier|
  s = Snippet.new
  s.identifier = identifier
  s.slug = identifier
  s.content = identifier + " Contant block - rich text"
  s.excerpt = identifier + " Excerpt text"
  s.save
end