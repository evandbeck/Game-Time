class MeetupsController < ApplicationController

    def index
        meetups = MeetUps.all.order(:time) 
        render json: meetups, status: :ok
    end

end
