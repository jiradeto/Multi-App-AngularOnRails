module ApplicationHelper
  def webpack_script_for(app)
    files = []
    path = Rails.root.join(app, 'webpack-assets.json')
    json = JSON.parse(File.read(path))
    if app == 'cat'
      # files.push(json['inline']['js'])
      files.push(json['polyfills']['js'])
      files.push(json['styles']['js'])
      files.push(json['vendor']['js'])
      files.push(json['main']['js'])
    else
      files.push(json['polyfills']['js'])
      files.push(json['vendor']['js'])
      files.push(json['main']['js'])
    end
    files
 end
end
