require 'test_helper'

class TransactionsControllerTest < ActionController::TestCase
  setup do
    @transaction = transactions(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:transactions)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create transaction" do
    assert_difference('Transaction.count') do
      post :create, transaction: { deposit_id: @transaction.deposit_id, line_item_id: @transaction.line_item_id, qty_deposited: @transaction.qty_deposited, qty_ordered: @transaction.qty_ordered, qty_transferred: @transaction.qty_transferred, transfer_id: @transaction.transfer_id, user_id: @transaction.user_id }
    end

    assert_redirected_to transaction_path(assigns(:transaction))
  end

  test "should show transaction" do
    get :show, id: @transaction
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @transaction
    assert_response :success
  end

  test "should update transaction" do
    put :update, id: @transaction, transaction: { deposit_id: @transaction.deposit_id, line_item_id: @transaction.line_item_id, qty_deposited: @transaction.qty_deposited, qty_ordered: @transaction.qty_ordered, qty_transferred: @transaction.qty_transferred, transfer_id: @transaction.transfer_id, user_id: @transaction.user_id }
    assert_redirected_to transaction_path(assigns(:transaction))
  end

  test "should destroy transaction" do
    assert_difference('Transaction.count', -1) do
      delete :destroy, id: @transaction
    end

    assert_redirected_to transactions_path
  end
end
