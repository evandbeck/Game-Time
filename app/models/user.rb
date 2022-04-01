class User < ApplicationRecord
    has_secure_password
    
    has_many :meetups, dependent: :destroy
    has_many :games, through: :meetups
    has_one :platform

end
