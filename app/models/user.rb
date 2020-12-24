class User < ApplicationRecord
    has_many :favorites
    has_many :videos, through: :favorites

    has_many :comments
    has_many :videos, through: :comments 

end
