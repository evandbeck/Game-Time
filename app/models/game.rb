class Game < ApplicationRecord
    has_many :meetups, dependent: :destroy
    has_many :users, through: :meetups
    has_one :platform
end
