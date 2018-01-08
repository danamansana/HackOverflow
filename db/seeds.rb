# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
User.destroy_all
Item.destroy_all
Like.destroy_all
i=0
#until i == 99
100.times do
  begin
    user = User.create!(username: Faker::Science.scientist, password: "password")
    item = Item.create!(user_id: user.id, body: "How to #{Faker::Hacker.verb} the #{Faker::Hacker.noun}?")
  rescue
    retry
  end

end

user_ids = User.all.map {|user| user.id}
question_ids = Item.all.map {|item| item.id}
user_ids.each do |id|
  Like.create(user_id: id, item_id: question_ids.sample, value: 1)
  Item.create(user_id: id, body: Faker::Hacker.say_something_smart, parent_id: question_ids.sample, content_type:'answer')
end
