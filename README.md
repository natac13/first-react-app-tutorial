I am following along best I can with this tutorial from Egghead.io. There are a few issues with changes in setup and I have noticed some changes in syntax with React@^0.14.0. 

~~This is the first time with Webpack and the Webpack-dev-server which I am trying out. However I am more comfortable with gulp and browserify at the moment and like the error reporting a little better. I also have nodemon setup to run this as an express app. I am not really sure how the Webpack-dev-server works and think it is best at them moment to stick with nodemon and the express server.js file~~

Got the express server working after installing babel-cli which is now needed to run babel-node. I then made a new script in the `package.json` file to launch the express server.

Alright I went to move to the newly updated code from Tyler's [repo](https://github.com/tylermcginnis/github-notetaker-egghead) and after installing react-router 1.0.0 I was unable to figure out how to run this as a express app. I have figured out with the help of the repo's code how to run the Webpack-dev-server and now am working with that.