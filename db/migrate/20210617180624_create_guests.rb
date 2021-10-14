class CreateGuests < ActiveRecord::Migration[6.1]
  def change
    create_table :guests do |t|
      t.string :username
      t.string :password_digest
      t.integer :age

      t.timestamps
    end
  end
end
