var app = new Vue(
{
  el: '#app',
  data: 
  {
    words: [],
    phrases: [],
    newEng: '',
    newEngEx: '',
    newRus: '',
    newRusEx: '',
    newEngP: '',
    newRusP: '',
  },
  mounted()
  {
    this.getWords();
    this.getPhrases();
  },
  methods:
  {
    async getWords()
    {
      fetch('/api/words')
      .then(response => response.json())
      .then(data =>
      {
        data.forEach(word => 
        {
          word['show_eng'] = false;
          this.words.push(word);
        });
      });
    },
    async getPhrases()
    {
      fetch('/api/phrases')
      .then(response => response.json())
      .then(data =>
      {
        data.forEach(phrase => 
        {
          phrase['show_eng'] = false;
          this.phrases.push(phrase);
        });
      });
    },
    wordClicked(word)
    {
      word.show_eng = !word.show_eng;
    },
    phraseClicked(phrase)
    {
      phrase.show_eng = !phrase.show_eng;
    },
    addWord()
    {
      let newWord = 
      {
        eng: this.newEng,
        rus: this.newRus,
        ex_e: this.newEngEx,
        ex_r: this.newRusEx,
      }
      fetch('/api/words', 
      { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newWord) , 
      })
      .then(response => response.json())
      .then(data =>
      {
        data['show_eng'] = false;
        this.words.push(data);
        $('.modal-input').val('');
        $('#wordModal').modal('hide');        
      })
    },
    addPhrase()
    {
      let newPhrase = 
      {
        eng: this.newEngP,
        rus: this.newRusP,
      }
      fetch('/api/phrases', 
      { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPhrase) , 
      })
      .then(response => response.json())
      .then(data =>
      {
        data['show_eng'] = false;
        this.phrases.push(data);
        $('.modal-input').val('');
        $('#phraseModal').modal('hide');      
      })
    },
    // modalClose()
    // {
    //   $('.modal-input').val('');
    // },
    deleteWords()
    {
      fetch('/api/words', 
      { 
        method: 'DELETE', 
        headers: { 'Content-Type': 'application/json' },
      })
      .then(() =>
      {
        this.words = []
      })
      .catch(error => console.log(error));
    },
    deleteWord(word)
    {
      // return;
      fetch('/api/words/' + word._id, 
      { 
        method: 'DELETE', 
        headers: { 'Content-Type': 'application/json' },
      })
      .then(() =>
      {
        this.words.splice(this.words.indexOf(word), 1);
      })
      .catch(error => console.log(error));
    },
    deletePhrases()
    {
      fetch('/api/phrases', 
      { 
        method: 'DELETE', 
        headers: { 'Content-Type': 'application/json' },
      })
      .then(() =>
      {
        this.phrases = []
      })
      .catch(error => console.log(error));
    },
    deletePhrase(phrase)
    {
      fetch('/api/phrases/' + phrase._id, 
      { 
        method: 'DELETE', 
        headers: { 'Content-Type': 'application/json' },
      })
      .then(() =>
      {
        this.phrase = []
      })
      .catch(error => console.log(error));
    }
  }

    
});

$(document).ready(() =>
{
  // There isn't a good easy way to do this with vue (custom event handling)
  $('#wordModal').on('hidden.bs.modal', () => $('.modal-input').val(''));
  $('#phraseModal').on('hidden.bs.modal', () => $('.modal-input').val(''));
});