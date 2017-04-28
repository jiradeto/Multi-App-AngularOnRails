# Setup 
## Install dependencies
### For project dependencies
```
npm install 
```
### For app dependencies (admin-app, web-app)
```
npm run postinstall 
```
<br>

## Build Angular2 app to Rails public/wasset directory
using webpack for bundle all relate files and library 
- Development
```
npm run build
```

- Production
```
npm run build:prod
```


## Start Rails server 
```
bundle install && rake db:create && rails server
```


- Web app -> [localhost:3000](http://localhost:3000)
- Admin app -> [localhost:3000/admin](http://localhost:3000/admin)