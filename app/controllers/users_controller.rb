class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorize, only: :create

    def create 
        user = User.create!(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: { errors. user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        render json: @current_user
    end

    def update
        meetup = Meetup.find(params[:id])
        meetup.update(meetup_params)
    end

    private 

    def user_params
        params.permit(:username, :password, :password_confirmation, :name, :age)
    end

    def render_not_found_response
        render json: { error: "User not found" }, status: :not_found
    end
end
