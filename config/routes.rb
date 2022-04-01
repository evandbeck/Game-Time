Rails.application.routes.draw do
  
  resources :platforms
  resources :meetups, only: [:index, :destroy, :create]
  resources :games, only: [:index, :show]
  resources :users, only: [:index]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  get "/games/limited", to: "games#limited"
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  get "/meetups/next", to: "meetups#next"
  get "/meetups/limited", to: "meetups#limited"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
