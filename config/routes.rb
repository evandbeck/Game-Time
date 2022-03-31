Rails.application.routes.draw do
  
  resources :platforms
  resources :meetups, only: [:index, :destroy, :create]
  resources :games, only: [:index, :show]
  resources :users, only: [:index]
  resources :sessions, only: [:create, :destroy]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "meetups/next", to: "meetups#next"
  get "meetups/limited", to: "meetups#limited"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
