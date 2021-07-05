Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do #👈🏻 we can set default response format of the block
    namespace :v1 do
      resources :courses, only: [:create, :destroy, :update, :show, :index] do
   
        resources :enrollments, shallow: :true, only: [:create, :destroy, :update]
      end
      resources :enrollments, only: [:index]
      resource :session, only: [:create, :destroy]
      get("/current_user", to: "sessions#get_current_user")

      resources :users, only: [:create] do
        get :current, on: :collection
      end

    end
    match "*unmatched_route", to: "application#not_found", via: :all
  end

end
