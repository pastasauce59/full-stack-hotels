class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.string :room_type
      t.integer :price
      t.string :image
      t.integer :hotel_id

      t.timestamps
    end
  end
end
