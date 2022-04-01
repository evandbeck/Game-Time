class MeetupSerializer < ActiveModel::Serializer
  attributes :id, :description, :date, :time
  has_one :user
  has_one :game
end
