# == Schema Information
#
# Table name: lot_numbers
#
#  id         :integer          not null, primary key
#  number     :string(255)
#  region     :string(255)
#  provenance :string(255)
#  location   :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class LotNumberTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
