Rails.application.routes.draw do
  root to: 'application#web'

  get 'admin' => 'application#admin'
end
