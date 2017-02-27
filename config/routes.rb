Rails.application.routes.draw do
  
  devise_for :users
  root 'homes#show'
  resources :projects do
  	resources :tasks do
  	 	put :set_position, on: :member
  	end
  end
  resource :home
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
