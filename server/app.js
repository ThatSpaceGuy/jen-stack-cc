var express = require('express');
var app = express();

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

// base url hit
app.get('/', function(req,res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
});
