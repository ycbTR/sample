# == Schema Information
#
# Table name: line_items
#
#  id                    :integer          not null, primary key
#  order_id              :integer
#  seedmix_or_individual :string(255)
#  qty                   :integer
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  deposit_id            :integer
#  price                 :decimal(, )
#

require 'test_helper'

class LineItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
