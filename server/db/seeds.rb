# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


PASSWORD = "supersecret"

Course.destroy_all()
User.delete_all()

super_user = User.create(
  first_name: "Jon",
  last_name: "Snow",
  email: "js@winterfell.gov",
  password: PASSWORD,
  isAdmin: true,
)

10.times do |x|
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: PASSWORD,
  )
end

users = User.all

15.times do |x|
    course = Course.create({
    name: Faker::Educator.course_name,
    topic: Faker::Educator.subject,
    user: users.sample,
  })
end
  courses = Course.all

puts Cowsay.say("Generated #{User.count} users", :ghostbusters)
puts Cowsay.say("Sign in with #{super_user.email} and password: #{PASSWORD}", :cow)
puts Cowsay.say("Generated #{courses.count}  courses!", :turtle)