class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.integer :user_id, null: false
      t.integer :parent_id
      t.string :parent_type
      t.string :body, null: false
    end
    add_index :items, :user_id
    add_index :items, :parent_id
  end
end
