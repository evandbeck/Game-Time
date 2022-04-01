class UsersController < ApplicationController
    rescue_from ActiveController::RecordNotFound, with: :render_not_found_response
    before_action :authorize, only: [:show]
    
    def update
        meetup = Meetup.find(params[:id])
        meetup.update(meetup_params)
    end

    private

    def meetup_params
        params.permit(:user_id)
    end

    def render_not_found_response
        render json: { error: "Meetup not found" }, status: :not_found
    end

end
