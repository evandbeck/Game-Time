class MeetupsController < ApplicationController

    def index
        meetups = Meetup.all.order(:time)
        render json: meetups, status: :ok
    end

end
