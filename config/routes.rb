Rails.application.routes.draw do
  
  post "/login", to: "guests#login"
  resources :reservations
  resources :rooms
  resources :hotels
  resources :guests, only: [:create, :show]
  
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
