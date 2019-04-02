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
        data.forEach(word => {
          word['show_eng'] = false;
          this.words.push(word);
        });
      });
    },
    getPhrases()
    {
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
        // show_eng: false,
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
        console.log(data)
        // this.words.push(newWord);
        // $('.modal-input').val('');
        // $('#wordModal').modal('hide');        
      })
    },
    addPhrase()
    {
      let newPhrase = 
      {
        eng: this.newEngP,
        rus: this.newRusP,
        show_eng: false,
      }
      this.phrases.push(newPhrase);
      $('.modal-input').val('');
      $('#phraseModal').modal('hide');
    },
    // modalClose()
    // {
    //   $('.modal-input').val('');
    // },
    deleteWords()
    {
      console.log('need to delete')
    },
    deletePhrases()
    {
      console.log('need to delete')
    }
  }

    
});

$(document).ready(() =>
{
  // There isn't a good easy way to do this with vue (custom event handling)
  $('#wordModal').on('hidden.bs.modal', () => $('.modal-input').val(''));
  $('#phraseModal').on('hidden.bs.modal', () => $('.modal-input').val(''));
});