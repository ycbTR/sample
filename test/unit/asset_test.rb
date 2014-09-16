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

require 'test_helper'

class AssetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
