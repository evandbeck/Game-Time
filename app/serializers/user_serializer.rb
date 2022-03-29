class UserSerializer < ActiveModel::Serializer
  attributes :name, :age, :email, :password_digest
end
