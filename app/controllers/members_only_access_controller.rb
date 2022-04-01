class MembersOnlyAccessController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    before_action :authorize

    def index
        meetups = Meetup.where()
    end
end
