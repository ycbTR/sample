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

ActiveRecord::Schema.define(:version => 20160725234734) do

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

  create_table "cms_blocks", :force => true do |t|
    t.integer  "page_id",    :null => false
    t.string   "identifier", :null => false
    t.text     "content"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "cms_blocks", ["page_id", "identifier"], :name => "index_cms_blocks_on_page_id_and_identifier"

  create_table "cms_categories", :force => true do |t|
    t.integer "site_id",          :null => false
    t.string  "label",            :null => false
    t.string  "categorized_type", :null => false
  end

  add_index "cms_categories", ["site_id", "categorized_type", "label"], :name => "index_cms_categories_on_site_id_and_categorized_type_and_label", :unique => true

  create_table "cms_categorizations", :force => true do |t|
    t.integer "category_id",      :null => false
    t.string  "categorized_type", :null => false
    t.integer "categorized_id",   :null => false
  end

  add_index "cms_categorizations", ["category_id", "categorized_type", "categorized_id"], :name => "index_cms_categorizations_on_cat_id_and_catd_type_and_catd_id", :unique => true

  create_table "cms_files", :force => true do |t|
    t.integer  "site_id",                                          :null => false
    t.integer  "block_id"
    t.string   "label",                                            :null => false
    t.string   "file_file_name",                                   :null => false
    t.string   "file_content_type",                                :null => false
    t.integer  "file_file_size",                                   :null => false
    t.string   "description",       :limit => 2048
    t.integer  "position",                          :default => 0, :null => false
    t.datetime "created_at",                                       :null => false
    t.datetime "updated_at",                                       :null => false
  end

  add_index "cms_files", ["site_id", "block_id"], :name => "index_cms_files_on_site_id_and_block_id"
  add_index "cms_files", ["site_id", "file_file_name"], :name => "index_cms_files_on_site_id_and_file_file_name"
  add_index "cms_files", ["site_id", "label"], :name => "index_cms_files_on_site_id_and_label"
  add_index "cms_files", ["site_id", "position"], :name => "index_cms_files_on_site_id_and_position"

  create_table "cms_layouts", :force => true do |t|
    t.integer  "site_id",                       :null => false
    t.integer  "parent_id"
    t.string   "app_layout"
    t.string   "label",                         :null => false
    t.string   "identifier",                    :null => false
    t.text     "content"
    t.text     "css"
    t.text     "js"
    t.integer  "position",   :default => 0,     :null => false
    t.boolean  "is_shared",  :default => false, :null => false
    t.datetime "created_at",                    :null => false
    t.datetime "updated_at",                    :null => false
  end

  add_index "cms_layouts", ["parent_id", "position"], :name => "index_cms_layouts_on_parent_id_and_position"
  add_index "cms_layouts", ["site_id", "identifier"], :name => "index_cms_layouts_on_site_id_and_identifier", :unique => true

  create_table "cms_pages", :force => true do |t|
    t.integer  "site_id",                           :null => false
    t.integer  "layout_id"
    t.integer  "parent_id"
    t.integer  "target_page_id"
    t.string   "label",                             :null => false
    t.string   "slug"
    t.string   "full_path",                         :null => false
    t.text     "content"
    t.integer  "position",       :default => 0,     :null => false
    t.integer  "children_count", :default => 0,     :null => false
    t.boolean  "is_published",   :default => true,  :null => false
    t.boolean  "is_shared",      :default => false, :null => false
    t.datetime "created_at",                        :null => false
    t.datetime "updated_at",                        :null => false
  end

  add_index "cms_pages", ["parent_id", "position"], :name => "index_cms_pages_on_parent_id_and_position"
  add_index "cms_pages", ["site_id", "full_path"], :name => "index_cms_pages_on_site_id_and_full_path"

  create_table "cms_revisions", :force => true do |t|
    t.string   "record_type", :null => false
    t.integer  "record_id",   :null => false
    t.text     "data"
    t.datetime "created_at"
  end

  add_index "cms_revisions", ["record_type", "record_id", "created_at"], :name => "index_cms_revisions_on_record_type_and_record_id_and_created_at"

  create_table "cms_sites", :force => true do |t|
    t.string  "label",                          :null => false
    t.string  "identifier",                     :null => false
    t.string  "hostname",                       :null => false
    t.string  "path"
    t.string  "locale",      :default => "en",  :null => false
    t.boolean "is_mirrored", :default => false, :null => false
  end

  add_index "cms_sites", ["hostname"], :name => "index_cms_sites_on_hostname"
  add_index "cms_sites", ["is_mirrored"], :name => "index_cms_sites_on_is_mirrored"

  create_table "cms_snippets", :force => true do |t|
    t.integer  "site_id",                       :null => false
    t.string   "label",                         :null => false
    t.string   "identifier",                    :null => false
    t.text     "content"
    t.integer  "position",   :default => 0,     :null => false
    t.boolean  "is_shared",  :default => false, :null => false
    t.datetime "created_at",                    :null => false
    t.datetime "updated_at",                    :null => false
  end

  add_index "cms_snippets", ["site_id", "identifier"], :name => "index_cms_snippets_on_site_id_and_identifier", :unique => true
  add_index "cms_snippets", ["site_id", "position"], :name => "index_cms_snippets_on_site_id_and_position"

  create_table "deposit_adjustments", :force => true do |t|
    t.integer  "deposit_id"
    t.integer  "user_id"
    t.integer  "line_item_id"
    t.text     "comment"
    t.boolean  "initial",                                     :default => false
    t.decimal  "qty_onhold",    :precision => 8, :scale => 2
    t.decimal  "decimal",       :precision => 8, :scale => 2
    t.decimal  "qty_allocated", :precision => 8, :scale => 2
    t.decimal  "qty_bank",      :precision => 8, :scale => 2
    t.decimal  "qty_consigned", :precision => 8, :scale => 2
    t.datetime "created_at",                                                     :null => false
    t.datetime "updated_at",                                                     :null => false
    t.datetime "deleted_at"
  end

  create_table "deposits", :force => true do |t|
    t.integer  "lot_number_id"
    t.integer  "plant_id"
    t.date     "date"
    t.decimal  "qty_bank",             :precision => 8, :scale => 2
    t.decimal  "qty_consigned",        :precision => 8, :scale => 2
    t.datetime "created_at",                                         :null => false
    t.datetime "updated_at",                                         :null => false
    t.integer  "collector_id"
    t.decimal  "qty_onhold",           :precision => 8, :scale => 2
    t.text     "comments"
    t.decimal  "qty_allocated",        :precision => 8, :scale => 2
    t.datetime "deleted_at"
    t.float    "cached_qty_bank"
    t.float    "cached_qty_allocated"
    t.float    "cached_qty_consigned"
    t.float    "cached_qty_onhold"
    t.string   "plant_population"
    t.string   "reference"
  end

  add_index "deposits", ["deleted_at", "date", "collector_id"], :name => "d1"
  add_index "deposits", ["deleted_at", "lot_number_id", "plant_id"], :name => "d2"
  add_index "deposits", ["deleted_at"], :name => "d3"

  create_table "downloads", :force => true do |t|
    t.string   "file_name"
    t.text     "comments"
    t.datetime "created_at",        :null => false
    t.datetime "updated_at",        :null => false
    t.string   "file_file_name"
    t.string   "file_content_type"
    t.integer  "file_file_size"
    t.datetime "file_updated_at"
  end

  create_table "line_items", :force => true do |t|
    t.integer  "order_id"
    t.integer  "lot_number_id"
    t.integer  "plant_id"
    t.string   "seedmix_or_individual"
    t.integer  "qty"
    t.datetime "created_at",            :null => false
    t.datetime "updated_at",            :null => false
    t.integer  "deposit_id"
    t.decimal  "price"
  end

  create_table "lot_heritages", :force => true do |t|
    t.integer  "lot_number_id"
    t.integer  "heritage_id"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  create_table "lot_numbers", :force => true do |t|
    t.integer  "number"
    t.string   "region"
    t.string   "provenance"
    t.string   "location"
    t.datetime "created_at",                       :null => false
    t.datetime "updated_at",                       :null => false
    t.string   "spa_name"
    t.boolean  "spa_specific",  :default => false
    t.boolean  "self_heritage", :default => false
    t.integer  "mass_num"
  end

  add_index "lot_numbers", ["id", "spa_specific"], :name => "id_spa_spec"
  add_index "lot_numbers", ["spa_specific", "spa_name"], :name => "l2"
  add_index "lot_numbers", ["spa_specific"], :name => "l1"

  create_table "order_form_items", :force => true do |t|
    t.integer  "order_form_id"
    t.integer  "deposit_id"
    t.integer  "plant_id"
    t.float    "grams"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  create_table "order_forms", :force => true do |t|
    t.string   "type"
    t.string   "officer_name"
    t.string   "officer_number"
    t.text     "officer_address"
    t.string   "landholder_name"
    t.string   "landholder_number"
    t.text     "landholder_address"
    t.text     "property_address"
    t.string   "hectare"
    t.string   "kilometer"
    t.string   "grams_per_km"
    t.string   "sb_no"
    t.string   "pon"
    t.string   "business_name"
    t.string   "abn"
    t.string   "payer"
    t.string   "email"
    t.string   "mobile"
    t.text     "comments"
    t.datetime "created_at",         :null => false
    t.datetime "updated_at",         :null => false
    t.integer  "user_id"
    t.string   "state"
    t.string   "telephone"
    t.integer  "customer_id"
    t.string   "payee_name"
    t.text     "payee_address"
    t.string   "payee_number"
  end

  create_table "orders", :force => true do |t|
    t.string   "number"
    t.integer  "customer_id"
    t.datetime "completed_at"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
    t.integer  "order_form_id"
    t.decimal  "total"
    t.string   "state"
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
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
    t.integer  "user_id"
    t.boolean  "is_customer"
  end

  add_index "people", ["id", "type"], :name => "p1"

  create_table "plants", :force => true do |t|
    t.string   "species"
    t.string   "common_name"
    t.decimal  "price_paid"
    t.datetime "created_at",                         :null => false
    t.datetime "updated_at",                         :null => false
    t.boolean  "direct_seedable", :default => false
    t.decimal  "level_1_price"
    t.decimal  "level_2_price"
    t.decimal  "level_3_price"
  end

  add_index "plants", ["id", "species"], :name => "pid_spec"

  create_table "settings", :force => true do |t|
    t.string   "var",                      :null => false
    t.text     "value"
    t.integer  "thing_id"
    t.string   "thing_type", :limit => 30
    t.datetime "created_at",               :null => false
    t.datetime "updated_at",               :null => false
  end

  add_index "settings", ["thing_type", "thing_id", "var"], :name => "index_settings_on_thing_type_and_thing_id_and_var", :unique => true

  create_table "snippets", :force => true do |t|
    t.string   "label",                     :null => false
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
    t.string   "role"
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

end
