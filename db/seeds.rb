# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Deleting seeds..."
Platform.destroy_all
Meetup.destroy_all
User.destroy_all
Game.destroy_all

puts "🌱 Seeding Platforms..."
Platform.create(name: "Nintendo Switch")
Platform.create(name: "PC")
Platform.create(name: "Xbox Series X")
Platform.create(name: "PlayStation 5")
Platform.create(name: "PlayStation 4")

puts "Seeding Users..."
25.times do
    User.create(
        name: Faker::Name.name,
        age: rand(18..80),
        username: Faker::Internet.username,
        email: Faker::Internet.email,
        password: Faker::Internet.password,
        platform_id: Platform.ids.sample
    )
end

puts "Seeding Games..."
25.times do
    Game.create(
        title: Faker::Game.title,
        price: rand(20..99),
        review: Faker::Movie.quote,
        difficulty: "#{rand(10)}",
        platform_id: Platform.ids.sample
    )
end

puts "Seeding Meetups..."
25.times do
    Meetup.create(
        description: Faker::Quote.famous_last_words,
        date: Faker::Date.between(from: 10.days.ago, to: Date.today),
        time: rand(0..23),
        user_id: User.ids.sample,
        game_id: Game.ids.sample
    )
end

puts "✅ Done Seeding!"