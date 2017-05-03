Rails.application.routes.draw do
  root to: 'application#theme'

  # get 'admin' => 'application#admin'
  get 'theme' => 'application#web'

end
