# == Route Map
#
#         Prefix Verb   URI Pattern                              Controller#Action
#           root GET    /                                        static_pages#root
# api_user_album GET    w(.:format) api/albums#show {:format=>:json}
#      api_users POST   /api/users(.:format)                     api/users#create {:format=>:json}
#       api_user GET    /api/users/:id(.:format)                 api/users#show {:format=>:json}
#     api_albums GET    /api/albums(.:format)                    api/albums#index {:format=>:json}
#    api_session DELETE /api/session(.:format)                   api/sessions#destroy {:format=>:json}
#                POST   /api/session(.:format)                   api/sessions#create {:format=>:json}

Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create show] do
      resources :albums, only: %i[show]
    end
    resources :albums, only: %i[index]
    resource :session, only: %i[create destroy]
  end
end
