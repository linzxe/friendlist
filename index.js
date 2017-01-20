var express = require('express');
//the above line tells index.js to use express and import the necessary files
var app = express();
//the ()is not a function, it is saying this is the actual implementation of it. this is how we will use it
var http = require('http').Server(app);
//app is now an object of express
//http is a prebuilt node module which lets us make a low level web server

app.use(express.static(__dirname + '/public'));
//we get requests for a static file which is an html and css file. __dirname makes it so that we dont have to put the full path ==desktop-user-folder-file
//__dirname is a parameter saying find the path that exists
//request and response system
//this is saying when there is a request, go to __dirname
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});
//your browser, when you go to a website, it does a get request on the root route.
//when that occurs, run this function.
//as response, send the file from this here. __dirname allows that file to be dynamic and not just one set thing

app.listen(process.env.PORT || 3000, function(){
	console.log("hey bro dude, I'm listening on *3000 port");
})

//we have ports on computers. the ship comes in, and the stuff is unloaded onto the port.
//this tells the server we are building, hey come listen here
//PORT will become important when we deploy