Rails.application.routes.draw do
  root to: 'application#web'

  # get 'admin' => 'application#admin'
  get 'web' => 'application#web'

end
