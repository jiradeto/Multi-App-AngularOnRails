module ApplicationHelper
  def webpack_script_for(app)
    files = []
    path = Rails.root.join(app, 'webpack-assets.json')
    json = JSON.parse(File.read(path))

    files.push(json['polyfills']['js'])
    files.push(json['styles']['js'])
    files.push(json['vendor']['js'])
    files.push(json['main']['js'])
    files
 end
end
