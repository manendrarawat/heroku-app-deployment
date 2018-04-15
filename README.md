Steps to build a react project using webpack and Babel
=================================================================
1.  mkdir react-webpack-app
2.  cd react-webpack-app
3.  run npm init -y (to setup package.json with all default settings)
4.  npm i -S react					(current version v16.2.0)
5.  npm i -S react-dom					(current version v16.2.0)
7.  npm i -D babel-core		 		(current version v6.26.0)
8.  npm i -D babel-loader				(current version v7.1.4)
9.  npm i -D babel-preset-react			 (current version v6.24.1)   
      babel-preset-react is used for compiling JSX and other stuff down to JavaScript)
10. npm i -D babel-preset-es2015	     		 (current version v6.24.1)  
(for compiling JavaScript ES6 code down to ES5. babel-preset-es2015 is deprecated now babel-preset-env is using )
11. npm i -D webpack					( v3.10.0)
12. npm i -D webpack-dev-server			( v2.11.0)
13. create a new file webpack.config.js  (cd.>webpack.config.js)
14. create a new file index.html  (cd.>index.html)
15.  Create a folder src
16.  Create a file index.js inside src folder
17.  Create a file app.js inside src folder
