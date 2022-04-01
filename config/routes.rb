Rails.application.routes.draw do
  
  resources :platforms
  resources :meetups
  resources :games, only: [:index, :show]
<<<<<<< HEAD
  resources :users, only: [:index, :update]
  resources :sessions, only: [:create, :destroy]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "/meetups/next", to: "meetups#next"
  get "/meetups/limited", to: "meetups#limited"
=======
  resources :users, only: [:index]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post "/signup", to: "users#create"
  get "/me", to: "users#show"


  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "meetups/next", to: "meetups#next"
  # get "meetups/limited", to: "meetups#limited"
>>>>>>> user

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
