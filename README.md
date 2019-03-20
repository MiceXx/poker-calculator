This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#Poker Calculator

See http://micexx.github.io/poker-calculator

NOTE: Calculations used are only estimates and are a work in progress

Deployment to gh-pages
-----------
Add the following to package.json
```
  "homepage": "http://micexx.github.io/poker-calculator"
  ```
  
  Add these scripts under scripts in package.json
  ```
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
  ```

Deploy
  ```
  npm run deploy
  ```