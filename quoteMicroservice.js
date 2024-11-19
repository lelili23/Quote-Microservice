const express = require('express');
const app = express();
const port = 3001; // use any port that is free
const cors = require('cors');

app.use(cors());

const quotes = [
  "Be yourself; everyone else is already taken.",
  "You only live once, but if you do it right, once is enough.",
  "Be the change that you wish to see in the world.",
  "In three words I can sum up everything I've learned about life: it goes on.",
  "If you tell the truth, you don't have to remember anything.",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  "Insanity is doing the same thing, over and over again, but expecting different results.",
  "It is better to be hated for what you are than to be loved for what you are not.",
  "I'm not afraid of death; I just don't want to be there when it happens.",
  "Logic will get you from A to Z; imagination will get you everywhere.",
  "Do what you can, with what you have, where you are.",
  "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
  "It does not do to dwell on dreams and forget to live.",
  "If you don't know where you're going, any road'll take you there",
  "Nothing is impossible, the word itself says 'I'm possible'!",
  "Do what you feel in your heart to be right for you’ll be criticized anyway.",
  "You talk when you cease to be at peace with your thoughts."
];

app.get('/randomQuote', (req, res) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({quote: quote});
});

app.use((err, req, res, next) => {
    console.error(err.stack);  
    res.status(500).json({
      error: "Server Error",
      message: "The server encountered an issue."
    });
});
  
app.listen(port, () => {
    console.log(`Quote service is running!`);
    console.log(`You can access it at http://localhost:${port}/randomQuote`);
});
