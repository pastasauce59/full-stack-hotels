# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Guest.destroy_all
Guest.reset_pk_sequence

Hotel.destroy_all
Hotel.reset_pk_sequence

Reservation.destroy_all
Reservation.reset_pk_sequence

Room.destroy_all
Room.reset_pk_sequence
puts "Previous seed data deleted"

Guest.create(username: "Jdoe", password_digest: "abcd", age: 28)
puts "Guests created"


Hotel.create(name: "Glass Hotel", rating: 5, image: "https://www.1hotels.com/sites/default/files/2018-07/1_hotel_brooklyn_2017_3.jpg")
Hotel.create(name: "Vice Hotel", rating: 4, image: "https://www.1hotels.com/sites/default/files/2021-03/1_hotel_south_beach_high_res_10781.jpg")
Hotel.create(name: "Lagoon Hotel", rating: 5, image: "https://www.1hotels.com/sites/default/files/2021-06/hotel_overview_jiudianquanjingtu_1_1.jpg")
Hotel.create(name: "West Coast Hotel", rating: 3, image: "https://www.1hotels.com/sites/default/files/2019-05/pool_157_lr_0.jpg")
puts "Hotels created"

Room.create(room_type: "King Suite", price: 800, image: "https://www.1hotels.com/sites/default/files/styles/gallery_lg/public/2018-09/1bb_bridgeking.jpg?itok=MLCSAySv", hotel_id: 1)
Room.create(room_type: "Queen Suite", price: 450, image: "https://www.1hotels.com/sites/default/files/styles/gallery_lg/public/2018-07/1bb_skyline_king_room.jpg?itok=26DFVIoZ", hotel_id: 1)
Room.create(room_type: "Double Suite", price: 269, image: "https://www.1hotels.com/sites/default/files/styles/gallery_lg/public/2018-07/1_hotel_brooklyn_bridge_skyline_two_bed2_lo.jpg?itok=MMTxlhtL", hotel_id: 1)
Room.create(room_type: "Single Suite", price: 175, image: "https://www.1hotels.com/sites/default/files/styles/gallery_lg/public/2018-07/1_hotel_brooklyn_bridge_king_detail_dlt_2.jpg?itok=lKrSauyM", hotel_id: 1)

Room.create(room_type: "King Suite", price: 850, image: "https://www.1hotels.com/sites/default/files/styles/gallery_lg/public/2018-07/stuido_suite.jpg?itok=ftHBjc8n", hotel_id: 2)
Room.create(room_type: "Queen Suite", price: 500, image: "https://www.1hotels.com/sites/default/files/styles/gallery_lg/public/2018-07/home_studio_suite_cityview_bal_0.jpg?itok=hQBp98T4", hotel_id: 2)
Room.create(room_type: "Double Suite", price: 300, image: "https://www.1hotels.com/sites/default/files/styles/gallery_lg/public/2018-07/two_queens_kings.jpg?itok=xfFW9dm7", hotel_id: 2)
Room.create(room_type: "Single Suite", price: 220, image: "https://www.1hotels.com/sites/default/files/styles/gallery_lg/public/2018-07/city_view_king.jpg?itok=iI7_8-HC", hotel_id: 2)

Room.create(room_type: "King Suite", price: 825, image: "https://www.1hotels.com/sites/default/files/styles/gallery_lg/public/2020-01/ocean_pool_view_suite_bed_-_resized.jpg?itok=mJJd1gpC", hotel_id: 3)
Room.create(room_type: "Queen Suite", price: 475, image: "https://www.1hotels.com/sites/default/files/styles/gallery_lg/public/2020-01/ocean_pool_view_room_beds_-_resized.jpg?itok=aQbk0PoS", hotel_id: 3)
Room.create(room_type: "Double Suite", price: 280, image: "https://www.1hotels.com/sites/default/files/styles/gallery_lg/public/2020-01/image-2020-01-07-10-41-50-447.jpg?itok=LRtfKz4p", hotel_id: 3)
Room.create(room_type: "Single Suite", price: 200, image: "https://www.1hotels.com/sites/default/files/styles/gallery_lg/public/2020-09/deluxe_sunshine_room_1.jpg?itok=csDc2YqX", hotel_id: 3)

Room.create(room_type: "King Suite", price: 875, image: "https://www.1hotels.com/sites/default/files/styles/gallery_lg/public/2019-05/room_867_200_crop.jpg?itok=HF5o64iG", hotel_id: 4)
Room.create(room_type: "Queen Suite", price: 525, image: "https://www.1hotels.com/sites/default/files/styles/gallery_lg/public/2020-05/1_hotel_wh_2019_193.jpg?itok=te9AjiyF", hotel_id: 4)
Room.create(room_type: "Double Suite", price: 300, image: "https://www.1hotels.com/sites/default/files/styles/gallery_lg/public/2019-05/room_869_131_lr.jpg?itok=9VcOuZ2Y", hotel_id: 4)
Room.create(room_type: "Single Suite", price: 230, image: "https://www.1hotels.com/sites/default/files/styles/gallery_lg/public/2020-05/1_hotel_wh_2019_189.jpg?itok=qrYVNZeq", hotel_id: 4)
puts "Rooms created"

Reservation.create(date_start: "06/17/21", date_end: "06/20/21", room_id: 1, guest_id: 1)
Reservation.create(date_start: "06/20/21", date_end: "06/24/21", room_id: 1, guest_id: 2)
Reservation.create(date_start: "07/4/21", date_end: "07/10/21", room_id: 5, guest_id: 1)
puts "Reservations created"