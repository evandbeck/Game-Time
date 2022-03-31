class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :review, :difficulty
end
