class MeetupsController < ApplicationController

    def index
        meetups = Meetup.all.order(:time).limit(4)
        render json: meetups, status: :ok
    end

end
