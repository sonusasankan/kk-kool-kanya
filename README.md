#KOOL-KANYA

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running App
- `npm` to install all dependencies
-  `npm start` to run app
- `nodemon server.js` to run nodemon server to serve dummy data
- `npm run storybook` to run storybook

## Creating and running Docker image
- `docker build . -t kool-kanya` to create image of app
- `docker images` to get list of all images
- `docker run -p 8001:80 kool-kanya` to run latest image

To remove all images use this [Guide](http://blog.baudson.de/blog/stop-and-remove-all-docker-containers-and-images)

##Using local setup of eslint
- `./node_modules/.bin/eslint src` to run eslint
- `./node_modules/.bin/eslint src --fix` to fix eslint issues