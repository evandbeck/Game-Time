class GameSerializer < ActiveModel::Serializer
  attributes :title, :price, :review, :difficulty
end
