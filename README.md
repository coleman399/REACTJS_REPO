![Screenshot (50)](https://user-images.githubusercontent.com/91759734/141602132-28283de5-c9cc-404e-817b-a50d709657ea.png)
devCodeCamp Intro to REACT.js

Steps to creating a React.js app on Windows using Create React App

Pros to using Create React App

- Create React App is a tool built by Facebook that has a lot of built-in setup and configuration so
that developers can quickly build a React app without the time-consuming process of
configuring everything.

- It provides out of the box development server with hot reloading, test environment with Jest,
bundler, CSS module support, understand ES6 syntax

- Great starting point for learning React
Cons to using Create React App

- Create React App hides the build config which makes it difficult to extend upon it.
- 
- It takes some work to integrate with a Node.js and Express backend application. That is why it is
typically better to build a React app from scratch when wanting to use Node.js and Express.js.

Steps for Create React App

1. Install node.js https://nodejs.org/en/
  a. This will allow the use of Node Package Manager (npm)

2. Type the following command to create a React app:
  a. For Windows users: npm create react-app [your app name here]
    i. App name must be all lowercase

3. Once the React app is created, several commands can be run inside the directory
  a. npm start
    i. starts the development server
    ii. the most used command when creating a react app
    
b. npm run build
  i. bundles the app into static files for production
  
c. npm test
  i. starts the test runner
 
d. npm run eject
  i. removes this tool and copies build dependencies, configuration files and scripts
    into the app directory. There is no coming back from this command. It is when
    you decide that you want to do more than what Create React App provides
    
4. Change directory into the app directory you just created

5. Type the following command to run the server:
  a. npm start
