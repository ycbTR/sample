class CreateSnippets < ActiveRecord::Migration

  def change
    create_table :snippets do |t|
      t.string :slug, :null => false
      t.string :identifier, :null => false
      t.text :excerpt
      t.text :content
      t.integer :position, :null => false, :default => 0
      t.timestamps
    end

  end
end
