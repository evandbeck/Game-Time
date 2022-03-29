class GameSerializer < ActiveModel::Serializer
  attributes :title, :price, :review, :difficult
end
