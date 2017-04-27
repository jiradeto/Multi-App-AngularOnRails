module ApplicationHelper
  def webpack_script_for(app)
    files = []    
    path = Rails.root.join(app, 'webpack-assets.json')
    json = JSON.parse(File.read(path))
    
    
    # fix this later https://github.com/webpack/webpack/issues/368
    # scipr need to in this order
    
    files.push(json["inline"]["js"])
    # files.push(json["polyfills"]["js"])
    # files.push(json["styles"]["js"])
    # files.push(json["vendor"]["js"])
    # files.push(json["main"]["js"])


    

    # files.push(json["vendor"][1]['js'])
    # json.each do |script|
    #   files.push(script[1]['js'])
    # end
    files
 end
end
