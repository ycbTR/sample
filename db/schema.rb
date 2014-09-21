# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20140921121820) do

  create_table "assets", :force => true do |t|
    t.string   "attachment_file_name"
    t.string   "attachment_content_type"
    t.integer  "attachment_file_size"
    t.datetime "attachment_updated_at"
    t.integer  "user_id"
    t.string   "type"
    t.integer  "viewable_id"
    t.string   "viewable_type"
    t.datetime "created_at",              :null => false
    t.datetime "updated_at",              :null => false
  end

  create_table "catalogs", :force => true do |t|
    t.integer  "lot_number_id"
    t.integer  "plant_id"
    t.integer  "qty_in_bank"
    t.integer  "qty_on_consignment"
    t.datetime "created_at",         :null => false
    t.datetime "updated_at",         :null => false
  end

  create_table "deposits", :force => true do |t|
    t.integer  "lot_number_id"
    t.integer  "plant_id"
    t.date     "date"
    t.integer  "qty_bank"
    t.integer  "qty_consigned"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
    t.integer  "collector_id"
  end

  create_table "line_items", :force => true do |t|
    t.integer  "order_id"
    t.string   "seedmix_or_individual"
    t.integer  "qty"
    t.datetime "created_at",            :null => false
    t.datetime "updated_at",            :null => false
    t.integer  "deposit_id"
  end

  create_table "lot_numbers", :force => true do |t|
    t.string   "number"
    t.string   "region"
    t.string   "provenance"
    t.string   "location"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "orders", :force => true do |t|
    t.string   "number"
    t.integer  "customer_id"
    t.datetime "completed_at"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  create_table "people", :force => true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "address_1"
    t.string   "address_2"
    t.string   "town"
    t.string   "postcode"
    t.string   "email"
    t.string   "phone"
    t.string   "type"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "plants", :force => true do |t|
    t.string   "species"
    t.string   "common_name"
    t.decimal  "price_paid"
    t.decimal  "price_charged"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  create_table "snippets", :force => true do |t|
    t.string   "slug",                      :null => false
    t.string   "identifier",                :null => false
    t.text     "excerpt"
    t.text     "content"
    t.integer  "position",   :default => 0, :null => false
    t.datetime "created_at",                :null => false
    t.datetime "updated_at",                :null => false
  end

  create_table "transactions", :force => true do |t|
    t.integer  "deposit_id"
    t.integer  "line_item_id"
    t.integer  "transfer_id"
    t.integer  "qty_deposited"
    t.integer  "qty_ordered"
    t.integer  "qty_transferred"
    t.integer  "user_id"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  create_table "transfers", :force => true do |t|
    t.integer  "lot_number_id"
    t.integer  "plant_id"
    t.integer  "qty_transferred"
    t.date     "date"
    t.integer  "user_id"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "email",                  :default => "", :null => false
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0,  :null => false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

end
