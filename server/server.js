// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );


// use bodyParser.urlencoded throughout the app with this:
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

//globals
const PORT = 5000;

//spin up server
app.listen(PORT, () => {
  console.log('server running on: ', PORT);
}); // end spin up server

let jokes = [
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they’d still be in the boat!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "I went to the zoo the other day, it had one dog...",
    punchLine: "It was a shih tzu."
  }
];

//routes

app.get('/jokes', (req, res) => {
  
  res.send( {jokes} );


}) //end app.get

app.post('/jokes', (req, res) =>{

  jokes.push(req.body);
  res.status(200).send("success!")
 
  })
//   el = req.body;
//   console.log(el);
// const insertString =  ${el.whoseJoke} 

//   const { whoseJoke, jokeQuestion, punchLine } = req.body;

//   const newJoke = { whoseJoke, jokeQuestion, punchLine };
//   jokes.push(newJoke);

//   res.status(201).json(jokes);
// })