# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Course.create(club_name: "Legacy on Lanier Golf", number_of_holes: 18, course_length: 6580, club_type: "public", address: "7000 Lanier Islands Pkwy", city: "Buford", state: "GA", zip_code: 30518, phone: "(800) 840-5253", website: "http://www.lanierislands.com/activities/golf", image: "https://www.lanierislands.com/i/SITE_200623_11221101_1JA3R/content/CMS_06232020_112802050_QLT12/BFC1BC3D-EB1F-BE00-FC51FC2AFEF6082E.JPG")
Course.create(club_name: "Sugar Hill Golf Club", number_of_holes: 18, course_length: 6423, club_type: "municipal", address: "6094 Suwanee Dam Rd", city: "Sugar Hill", state: "GA", zip_code: 30518, phone: "(770) 271-0519", website: "http://www.sugarhillgolfclub.com/", image: "https://www.sugarhillgolfclub.com/wp-content/uploads/sites/3839/2014/12/index_pic11.jpg")
Course.create(club_name: "Bear's Best Atlata", number_of_holes: 18, course_length: 6857, club_type: "public", address: "5342 Aldeburgh Dr", city: "Suwanee", state: "GA", zip_code: 30024, phone: "(866) 511-2378", website: "http://www.clubcorp.com/Clubs/Bear-s-Best-Atlanta", image: "https://www.clubcorp.com/var/ezflow_site/storage/images/media/clubs/bear-s-best-atlanta-media-folder/images/redesign-website-images/bears-best_atlanta_ga_golf_bridge_module/12959411-1-eng-US/Bears-Best_Atlanta_GA_golf_bridge_module_frontpagemodule.jpg")
Course.create(club_name: "Windermere Golf Club", number_of_holes: 18, course_length: 6922, club_type: "private", address: "5000 Davis Love Dr", city: "Cumming", state: "GA", zip_code: 30041, phone: "(678) 513-1000", website: "http://www.clubcorp.com/Clubs/Windermere-Olde-Atlanta", image: "https://www.clubcorp.com/var/ezflow_site/storage/images/media/clubs/windermere-olde-atlanta-media-folder/images/amentities/golf/olde-atlanta-golf-club-suwanee-ga-hole17-560x310/9349041-1-eng-US/Olde-Atlanta-Golf-Club-Suwanee-GA-hole17-560x310_largeimage.jpg")

Comment.create(content: "This is one of my favorite golf courses. The views, layout and conditions are great. Plus, free food!", name: "James Weakland", course_id: 1)
Comment.create(content: "Its a challenging course with a nice layout", name: "Danny Herb", course_id: 2)
Comment.create(content: "Beautiful course. Difficult, but forgiving off the tee box. Greens are in phenomenal condition.", name: "matt harden", course_id: 3)
Comment.create(content: "Making tee time is a very challenging!!", name: "Sang Park", course_id: 4)