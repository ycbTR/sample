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

require 'test_helper'

class SnippetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
