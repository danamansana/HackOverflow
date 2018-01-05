class Item < ApplicationRecord
  validates :user_id, :body, presence: true
  belongs_to :user
  has_many :likes
  has_many :children,
    class_name: :Item,
    primary_key: :id,
    foreign_key: :parent_id

  def self.descendents(id, hash)
    return [] unless hash[id]
    hash[id].map {|child| descendents(child.id.to_i, hash)}.flatten.concat(hash[id])
  end

  def self.item_payload(own_id)
    item_hash = Item.item_hasher
    top_item = item_hash[nil].select {|item| item.id == own_id}[0]
    items = Item.descendents(own_id, item_hash)
    debugger
    likes = items.map {|item| item.likes}.flatten.concat(top_item.likes)
    show = {"items" => {own_id => top_item}, "likes" => likes}
    items.each do |item|
      show["items"][item.id] = item
    end
    return show
  end

  def self.item_hasher
    all_items = Item.includes(:likes).all
    item_hash_value = Hash.new {|h,k| h[k] = []}
    all_items.each do |item|
      item_hash_value[item.parent_id].push(item)
    end
    return item_hash_value
  end


end
