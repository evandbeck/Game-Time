class MeetupSerializer < ActiveModel::Serializer
  attributes :description, :date, :time
  has_one :user
  has_one :game
end
