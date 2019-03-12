var app = new Vue(
{
  el: '#app',
  data: 
  {
    words:
    [
      {
        eng: 'hi',
        rus: 'привет',
        ex_e: 'Bob said hi to Alice.',
        ex_r: 'Боб сказал Алисе привет.',
        show_eng: false,
      },
      {
        eng: 'I',
        rus: 'я',
        ex_e: 'I am happy.',
        ex_r: 'Я счастлив(а).',
        show_eng: false,
      },
      {
        eng: 'you',
        rus: 'вы',  
        ex_e: 'Are you happy?',
        ex_r: 'Вы счастливы?',
        show_eng: false,
      }     
    ],
    phrases:
    [
      {
        eng: 'How are you doing?',
        rus: 'Как дела?',
        show_eng: false,
      },
      {
        eng: 'What\'s your name?',
        rus: 'Как вас зовут?',
        show_eng: false,
      },
      {
        eng: 'Excuse me, where is the restroom?',
        rus: 'Скажите пожалуйста, где туалет?',
        show_eng: false,
      },
    ],
    newEng: '',
    newEngEx: '',
    newRus: '',
    newRusEx: '',
    newEngP: '',
    newRusP: '',
  },

  methods:
  {
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
        show_eng: false,
      }
      this.words.push(newWord);
      $('.modal-input').val('');
      $('#wordModal').modal('hide');
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
    }
    // modalClose()
    // {
    //   $('.modal-input').val('');
    // },
  }

    
});

$(document).ready(() =>
{
  // There isn't a good easy way to do this with vue (custom event handling)
  $('#wordModal').on('hidden.bs.modal', () => $('.modal-input').val(''));
  $('#phraseModal').on('hidden.bs.modal', () => $('.modal-input').val(''));
});