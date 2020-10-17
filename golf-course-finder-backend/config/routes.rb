Rails.application.routes.draw do
    resources :courses 
    resources :comments

    resources :courses do 
      resources :comments, only: [:index, :create, :show, :destroy]
    end
    
end
    
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html