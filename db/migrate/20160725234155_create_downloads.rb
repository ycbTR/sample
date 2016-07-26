class CreateDownloads < ActiveRecord::Migration
  def change
    create_table :downloads do |t|
      t.string :file_name
      t.text :comments

      t.timestamps
    end
  end
end
