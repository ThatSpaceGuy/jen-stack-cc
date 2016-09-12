##Node Express jQuery Code Challenge

### Objectives
- A) Initialize and spin up a server side node/express application.
- B) Send requests to the server from both the browser...
- C) ...and using ajax in the client side script.
- D) Display response on the DOM.
- E) Demonstrate the separation of logic between the client and the server.

### The Joke Book

Your client has asked you to create a Joke Book application. The server will contain all the current joke data and you have been provided with the initial server file (```server/app.js```).

Your job will be to build up the server around the data in the ```server/app.js``` file, display the current jokes to the DOM, and add the ability for users to add their own jokes and display these too.

#####How the joke data is structured
You can view the full object in ```server/app.js```. The data structure is an array of objects. These objects have three properties: whoseJoke, jokeQuestion, and punchLine.

```
jokes = [
  {
    whoseJoke: "Huck",
    jokeQuestion: "What's the difference between roast beef and pea soup?",
    punchLine: "Anyone can roast beef."
  }]
```

To get started, fork this repo and clone it to your machine.


Versioning Plan
---------------
* 0.0 - Fork and clone repo
* 0.1 - html/js/css & Server spin up build around client data - (Objective A)
* 0.2 - Create button to request all current jokes - (Objective B & C)
* 0.3 - Display current jokes on DOM - (Objective D)
* 0.4 - Add inputs for user to add own jokes.
* 0.5 - Get these to server and store it in the object. - (Objective E)
* 1.0 - Test app and sign off on 1.0
* 1.1 - Create show random button...
* 1.2 - ... which displays a single random quote.
