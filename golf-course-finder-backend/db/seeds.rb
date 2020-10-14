# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Course.create(club_name: "Legacy on Lanier Golf", number_of_holes: 18, course_length: 6580, type: "public" address: "7000 Lanier Islands Pkwy", city: "Buford", state: "GA", zip_code: 30518, phone: "1-800-840-5253", website: "http://www.lanierislands.com/activities/golf", image: "https://www.lanierislands.com/i/SITE_200623_11221101_1JA3R/content/CMS_06232020_112802050_QLT12/BFC1BC3D-EB1F-BE00-FC51FC2AFEF6082E.JPG")
Course.create(club_name: "Sugar Hill Golf Club", number_of_holes: 18, course_length:6423, type: "municipal" address: "6094 Suwanee Dam Rd", city: "Sugar Hill", state: "GA", zip_code: 30518, phone: "770-271-0519", website: "http://www.sugarhillgolfclub.com/", image: "https://www.sugarhillgolfclub.com/wp-content/uploads/sites/3839/2014/12/index_pic11.jpg")


Comment.create(content: "This is one of my favorite golf courses. The views, layout and conditions are great. Plus, free food!", name: "James Weakland", course_id: 1)
Comment.create(content: "Its a challenging course with a nice layout", name: "Danny Herb", course_id: 2)