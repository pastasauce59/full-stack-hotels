class CreateReservations < ActiveRecord::Migration[6.1]
  def change
    create_table :reservations do |t|
      t.string :date_start
      t.string :date_end
      t.integer :room_id
      t.integer :guest_id

      t.timestamps
    end
  end
end
