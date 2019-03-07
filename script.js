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
      },
      {
        eng: 'I',
        rus: 'я',
        ex_e: 'I am happy.',
        ex_r: 'Я счастлив(а).',
      } ,
      {
        eng: 'you',
        rus: 'вы',  
        ex_e: 'Are you happy?',
        ex_r: 'Вы счастливы?',
      }     
    ],
  },
});