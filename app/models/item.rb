class Item < ApplicationRecord
  validates :user_id, :body, presence: true
  belongs_to :user
  has_many :likes
  has_many :children,
    class_name: :Item,
    primary_key: :id,
    foreign_key: :parent_id

end
