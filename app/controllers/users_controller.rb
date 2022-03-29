class UsersController < ApplicationController
    before_action :authorize, only: [:show]
    
end
