var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:false});

// initial jokes provided by the client
var jokes = [
  {
    whoseJoke: "Huck",
    jokeQuestion: "What's the difference between roast beef and pea soup?",
    punchLine: "Anyone can roast beef."
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs"
  }
];

// spin up server
app.listen('8080','localhost',function(){
  console.log('Server is listening on port 8080');
});

// setup 'public' as a static resource
app.use(express.static('public'));

// base url hit
app.get('/', function(req,res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
});

// post routes to receive information from client
app.post('/display', urlEncodedParser, function(req,res){
  var jokeReq = req.body;
  console.log('Route post / hit with', jokeReq);

  var pagesToSend;
  switch (jokeReq.dispReq) {
    case 'all':
      pagesToSend = jokes;
      break;
    case 'random':
      var randJoke = Math.floor(Math.random()*jokes.length);
      pagesToSend = [jokes[randJoke]];
      break;
    default:
      console.log('Error in server /display switch statement');
  }

  var jokeRes = {
    jokePages: pagesToSend
  };

  res.send(jokeRes);
});

// post routes to receive information from client
app.post('/add', urlEncodedParser, function(req,res){
  var jokeAdd = req.body;
  console.log('Route post / hit with', jokeAdd);

  jokes.push(jokeAdd);

  res.sendStatus(200);
});
