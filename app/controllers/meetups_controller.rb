class MeetupsController < ApplicationController
    rescue_from ActiveController::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveController::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        meetups = Meetup.all.order(:time)
        render json: meetups, status: :ok
    end

    def limited
        limited = Meetup.all.order(:time).limit(8)
        render json: limited, status: :ok
    end

    def next
        next_meet = Meetup.all.order(:time).limit(1)
        render json: next_meet, status: :ok
    end

    def create
        meetup = Meetup.create(meetup_params)
        render json: meetup, status: :created
    end

    def destroy
        meetup = Meetup.find(params[:id])
        meetup.destroy
        head :no_content
    end

    private

    def meetup_params
        params.permit(:description, :title, :time, :date, :game_id, :user_id)
    end

    def render_not_found_response
        render json: { error: "Meetup not found" }, status: :not_found
    end

    def render_unprocessable_entity_response
        render json: { error: "Meetup invalid" }, status: :unprocessable_entity 
    end

end
