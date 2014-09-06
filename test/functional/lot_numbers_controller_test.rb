require 'test_helper'

class LotNumbersControllerTest < ActionController::TestCase
  setup do
    @lot_number = lot_numbers(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:lot_numbers)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create lot_number" do
    assert_difference('LotNumber.count') do
      post :create, lot_number: { location: @lot_number.location, number: @lot_number.number, provenance: @lot_number.provenance, region: @lot_number.region }
    end

    assert_redirected_to lot_number_path(assigns(:lot_number))
  end

  test "should show lot_number" do
    get :show, id: @lot_number
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @lot_number
    assert_response :success
  end

  test "should update lot_number" do
    put :update, id: @lot_number, lot_number: { location: @lot_number.location, number: @lot_number.number, provenance: @lot_number.provenance, region: @lot_number.region }
    assert_redirected_to lot_number_path(assigns(:lot_number))
  end

  test "should destroy lot_number" do
    assert_difference('LotNumber.count', -1) do
      delete :destroy, id: @lot_number
    end

    assert_redirected_to lot_numbers_path
  end
end
