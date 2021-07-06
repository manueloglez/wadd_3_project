# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'date'

FEATURESARRAY = ['Wifi', 'Projector', 'A/C', 'Parking', 'coffee bar', 'AV tech']
PASSWORD = "supersecret"



Reservation.destroy_all()
Facility.destroy_all()
Enrollment.destroy_all()
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

  30.times do |x|
    Enrollment.create({
      status: "pending",
      course: courses.sample,
      user: users.sample,
    })
  end
  enrollments = Enrollment.all
  
  6.times do |x|
    Facility.create({
      location: Faker::Address.full_address,
      name: Faker::Educator.campus,
      features: FEATURESARRAY.sample(3),
      is_available: true,
      user: super_user,
    })
  end
  facilities = Facility.all

  20.times do |x|
    Reservation.create({
      
      start_time: Faker::Time.between(from: DateTime.now + 1, to: DateTime.now + 4, format: :default), #=> "Tue, 16 Oct 2018 10:48:27 AM -05:00",
      end_time: Faker::Time.between(from: DateTime.now + 5 , to: DateTime.now + 8, format: :default),
      status: "pending",
      facility: facilities.sample,
      user: users.sample,
    })
  end
  reservations = Reservation.all


  


puts Cowsay.say("Generated #{User.count} users", :ghostbusters)
puts Cowsay.say("Sign in with #{super_user.email} and password: #{PASSWORD}", :cow)
puts Cowsay.say("Generated #{courses.count}  courses!", :turtle)
puts Cowsay.say("Generated #{enrollments.count}  enrollments!", :bunny)
puts Cowsay.say("Generated #{facilities.count}  facilities!", :kitty)
puts Cowsay.say("Generated #{reservations.count}  reservations!", :bunny)