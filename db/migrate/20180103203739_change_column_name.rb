class ChangeColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :items, :parent_type, :type
  end
end
