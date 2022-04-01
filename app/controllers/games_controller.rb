class GamesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def index
        games = Game.all
        render json: games, status: :ok
    end

    def limited
        limited = Game.all.limit(8)
        render json: limited, status: :ok
    end

    def show
        game = Game.find(params[:id])
        render json: game, status: :ok
    end

    private

    def render_not_found_response
        render json: { error: "Game not found" }, status: :not_found
    end
    
end
