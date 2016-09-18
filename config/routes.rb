Seedbank::Application.routes.draw do
  match 'active' => 'sessions#active', via: :get
  match 'timeout' => 'sessions#timeout', via: :get

  namespace :admin do
    resources :transactions
    resources :downloads do 
      get :backup, on: :collection
    end
    resources :reports do
      collection do
        get :spa_populations
        get :seed_deposits
        get :seed_deposits_by_date_entered
        get :nursery_seed_sales
        get :direct_seed_sales
        get :seed_containment
        get :seeds_on_consignment
        get :seeds_on_hold
      end
    end

    resources :lot_numbers do
      collection do
        get :bulk_import
        post :bulk_import
      end
    end
    resources :plants
    resources :people
    resources :transfers
    resources :deposits
    resources :orders do
      member do
        get :print
        get :order_xls
      end
    end
    resources :users
    resources :deposit_adjustments
    resources :settings
    resources :order_forms
    resources :spa_entries
  end

  namespace :customer do
    resources :order_forms, only: :new do
      collection do
        put :complete
      end
    end

    resources :orders, only: [:index, :show] do
      member do
        get :print
      end
    end

    get "profile", to: "order_forms#profile", :as => :profile
    put "profile", :to => "order_forms#profile", :as => :save_profile
  end


  #devise_for :users, controllers: { registrations: 'users/registrations', passwords: 'users/passwords' }

  devise_for :users

  root to: "home#index"
  get "catalogue/spa", to: "home#catalogue_spa", as: "catalogue_spa"
  get "catalogue/general", to: "home#catalogue_general", as: "catalogue_general"
  get "catalogue/nursery", to: "home#catalogue_nursery", as: "catalogue_nursery"
  get "catalogue/seeding", to: "home#catalogue_seeding", as: "catalogue_seeding"
  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'

  ComfortableMexicanSofa::Routing.admin(:path => '/cms-admin')
  # Make sure this routeset is defined last
  ComfortableMexicanSofa::Routing.content(:path => '/', :sitemap => false)

end
