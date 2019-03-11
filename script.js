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
    selectedWord: null,
  },

  methods:
  {
    wordClicked: (word) =>
    {
      word.show_eng = !word.show_eng;
      this.selectedWord = word;
    }
  }

    
});