class HotelSerializer < ActiveModel::Serializer
  attributes :id, :name, :rating, :image
  has_many :rooms
end
