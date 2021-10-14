class RoomSerializer < ActiveModel::Serializer
  attributes :id, :room_type, :price, :image, :hotel
  belongs_to :hotel
  has_many :reservations
  has_many :guests, through: :reservations
end
