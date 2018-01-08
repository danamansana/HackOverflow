class AddValueToLikes < ActiveRecord::Migration[5.1]
  def change
    add_column :likes, :value, :integer
  end
end
