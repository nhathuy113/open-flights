Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'pages#index'

  namespace :api do 
    namespace :v1 do
      # question: why param: :slug
      # question: if write "resource", why url "localhost/airlines" return 'airline#show'?
      resources :airlines, param: :slug
      resources :reviews, only: [:create, :destroy]
    end
  end

  # re-direct all path to React App page
  get '*path', to: 'pages#index', via: :all
end
