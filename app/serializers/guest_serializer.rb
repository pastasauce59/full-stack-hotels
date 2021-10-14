class GuestSerializer < ActiveModel::Serializer
  attributes :username, :age, :id
  
  has_many :reservations
  has_many :rooms, through: :reservations
end
