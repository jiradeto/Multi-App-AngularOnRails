# Setup 
## Install dependencies
### For project dependencies, go to root directory 
```
npm install 
```

### For app dependencies
- Admin App
```
cd admin-app
npm install 
```

- Web App
```
cd web-app
npm install 
```
<br>

## Build Angular2 app to Rails public/wasset directory
back to root app directory, and type
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