const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static('public'));

// connect to the database
mongoose.connect('mongodb://localhost:27017/russ', {
  useNewUrlParser: true
});

const wordSchema = new mongoose.Schema({
  eng: String,
  rus: String,
  ex_e: String,
  ex_r: String,
});
const Word = mongoose.model('Word', wordSchema);

const phraseSchema = new mongoose.Schema({
  eng: String,
  rus: String,
});
const Phrase = mongoose.model('Phrase', phraseSchema);

app.get('/api/words', async (req, res) => {
  Word.find({}).then(value => {
    console.log(value);
    res.send(value);
  })
});

app.get('/api/phrases', async (req, res) => {
  Phrase.find({}).then(value => {
    // console.log(value);
    res.send(value);
  })
});

app.post('/api/words', async (req, res) => {
  console.log(req)
  const word = new Word({
    eng: req.body.eng,
    rus: req.body.rus,
    ex_e: req.body.ex_e,
    ex_r: req.body.ex_r,
  });
  await word.save((error) => {
    console.log(error);
    res.sendStatus(500);
  });
  res.send(word);
});

app.post('/api/phrases', async (req, res) => {
  const phrase = new Phrase({
    eng: req.body.eng,
    rus: req.body.rus,
  });
  await phrase.save((error) => {
    console.log(error);
    res.sendStatus(500);
  });
  res.send(phrase);
});



app.listen(3000, () => console.log('Server listening on port 3000!'));