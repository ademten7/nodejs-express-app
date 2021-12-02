//first initiliaze your folder npm init -y
//npm install express --save
const express = require("express");
//create express server
const app = express(); //our server is ready now

//serve static files
//images are static file==put all static files inside static folder (image and style)
//__dirname==>this are global object inside the nodejs
app.use(express.static(__dirname + "/static"));
//if we deploy our app maybe the deployment servers have not this port.
const PORT = process.env.PORT || 4000;
console.log("hello world");

//to restart automatically we need another package
//whenever we make a change it update automatically
//nodemon==>monitoring
//npm i nodemon --save-dev ==>this is dev dependencies
//there is two dependency one is main the other is development
/*
},
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  }

  //change this test
  "scripts": {
    "start": "node app", 
    "dev":"nodemon app"
  },
  npm run dev ==>execute this command after kill the terminal
*/

//routes endpoints /
//app.get is a method ===> GET request :receive a GET request
app.get("/", (req, res) => {
  // res.write();
  // res.end()

  //if we send only data use res.send(data) or res.json(data) both are same
  //but if you want to send file use below
  //send back file and close the process
  res.sendFile(__dirname + "/index.html"); //to get absolute path
});
//routes endpoints /
app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/profile", (req, res) => {
  res.sendFile(__dirname + "/profile.html");
});

//this server responsible from the request
app.listen(PORT, () => console.log("serving is running on port :", PORT));
