<template>
  <div class='main-container' id='app'>  
    <div class='container'>
      <br>
      <h3 class='center-text'>Words</h3>
      <br>
      <div class='card-row'>
          <div class='card-column' v-for='phrase in phrases' v-bind:key='phrase.eng'>
          <div v-bind:class='[ phrase.show_eng ? "card" : "card-inverse" ]'>
            <div>
              <p class='card-text center-text large' v-if='phrase.show_eng'>{{phrase.eng}}</p>
              <p class='card-text center-text large' v-else>{{phrase.rus}}</p>
            </div>    
            <div class='buttonDiv'>
              <div class='buttonLeft'>
                <button type='button' class='deleteButton' @click='deletePhrase(phrase)'>delete </button>
              </div>
              <div class='buttonRight'>
                <button type='button' class='flipButton' 
                        v-bind:class='[phrase.show_eng ? "btn-dark" : "btn-light"]' 
                        @click='phraseClicked(phrase)'>flip</button>
              </div>
            </div>       
          </div>
        </div>
        <div class='card-column'>
          <button type='button' class='flipButton autoWidth' @click='showPhraseModal'>add phrase</button>
        </div>
      </div>

      <div id='deleteDiv'>
        <button type='button' class='deleteButton autoWidth' @click='deletePhrases()'>Delete All Phrases</button>
      </div>
  

      <div class='empty-large'></div>
    </div> 


    <!-- Phrase Modal -->
    <phrase-modal :show='showPhrase' @phraseSaved='phraseSaved'  @escape='hidePhraseModal' />

  <!-- end app -->
  </div> 
</template>



<script>
  import PhraseModal from '@/components/PhraseModal.vue'

  export default 
  {
    name: 'phrases',
    components: 
    {
      PhraseModal,
    },
    data()
    {
      return {
        phrases: [],
        showPhrase: false,
      }
    },
    // mounted()
    created()
    {
      this.getPhrases();
    },
    methods:
    {
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
          this.phrases.splice(this.phrases.indexOf(phrase), 1);
        })
        .catch(error => console.log(error));
      },
      showPhraseModal()
      {
        this.showPhrase = true;
      },
      hidePhraseModal()
      {
        this.showPhrase = false;
      },
      phraseClicked(phrase)
      {
        phrase.show_eng = !phrase.show_eng;
      },
      phraseSaved(phrase)
      {
        phrase['show_eng'] = false;
        this.phrases.push(phrase);
        this.hidePhraseModal();
      },
    },
  }

</script>


<style scoped>
  .center-text {
    text-align: center;
  }

  .input-group {
    margin-top: 10px;
  }

  #saveButton {
    background-color: #2687CC;
  }

  .b-green {
    background-color: #14B414;
    color: white;
  }

  button {
    border: none;
    padding: 10px 15px;
    border-radius: 6px;
  }

  .deleteButton {
    background-color: #ff1e1e;
    border-style: solid;
    border-color: #ff1e1e;
    border-width: 3px;
    color: white;
    padding: 10px;
    width: 100%;
  }

  .flipButton {
    background-color: #44e54a;
    border-style: solid;
    border-color: #44e54a;
    border-width: 3px;
    color: white;
    padding: 10px;
    width: 100%;
  }

  .autoWidth {
    width: auto;
  }

  .deleteButtonText {
    padding: 0px;
  }

  /* .deleteButton:hover {
    background-color: white;
    color: #ff1e1e;
  } */

  .buttonDiv {
    display: flex;
    flex-direction: row;
  }

  .buttonLeft {
    display: flex;
    justify-content: flex-start;
    width: 30%;
  }

  .buttonRight {
    display: flex;
    justify-content: flex-end;
    width: 65%;
    padding-left: 5%;
  }

  .buttonLong {
    width: 100%;
  }


  #deleteDiv {
    padding-left: 20px;
    padding-top: 10px;
  }

  .spacer {
    width: 100%;
    height: 30px;
  }


  /********** Flash Card Grid **********/
  .card-row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
  }

  /* Create 4 equal columns that sits next to each other */
  .card-column {
    flex: 23%;
    max-width: 25%;
    /* padding: 0 8px 8px 8px; */
    margin: 2%;
  }

  .card {
    /* margin: 8px; */
    margin-right: 20px;
    padding: 8px;
    background-color: white;
    border-style: solid;
    border-color: #349de7;
    border-width: 3px;
    border-radius: 6px;
  }
  /* .card:hover {
    background-color: #d5f4ff;
  } */
  .card-inverse {
    /* margin: 8px; */
    margin-right: 20px;
    padding: 8px;
    background-color: #349de7;
    border-style: solid;
    border-color: #349de7;
    border-width: 3px;
    border-radius: 6px;
  }
  /* .card-inverse:hover {
    background-color: #4faff3;
    border-color: #4faff3;
  } */

  .card-inverse .card-text {
    color: white;
  }

  .card-text {
    color: #349de7;
  }

  .pad-bottom {
    padding-bottom: 8px;
  }

  .large {
    font-size: xx-large;
  }

  .add-word:hover {
    background-color: #349de7;
    border-style: solid;
    border-color: #349de7;
  }

  .add-word:hover .card-text {
    color: white;
  }

  .add-spacer {
    height: 30;
    width: 100%;
  }

  /* Responsive layout - makes a one column-layout instead of four columns */
  @media screen and (max-width: 800px) {
    .card-column {
        flex: 50%;
        max-width: 50%;
    }
  }

  /* Responsive layout - makes the one columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .card-column {
        flex: 100%;
        max-width: 100%;
    }
  }
  /******** End Photo Grid ********/

  
</style>