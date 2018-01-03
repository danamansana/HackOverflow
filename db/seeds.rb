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
i=0
until i == 99
  begin
    user = User.create(username: Faker::Science.scientist, password: "password")
    item = Item.create(user_id: user.id, body: "How to #{Faker::Hacker.verb} the #{Faker::Hacker.noun}?")
  rescue
    retry
  end

  i+=1
end
