<template id='modal-template'>
  <transition v-if="show" name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h1 class="modal-title">Add New Word</h1>
          </div>
          <div class="modal-body">
            <p v-if="error" class="error">{{error}}</p>
            <form @submit.prevent="saveWord">
              <input class='modalInput' v-model="newEng" placeholder="English word">
              <p></p>
              <textarea class='modalInput' v-model="newEngEx" placeholder="English example"></textarea>
              <p></p>
              <input class='modalInput' v-model="newRus" placeholder="Russian word">
              <p></p>
              <textarea class='modalInput' v-model="newRusEx" placeholder="Russian example"></textarea>
              <p></p>
              <div class='buttonDiv'>
                <button type="button" @click="close" class="buttonLeft">Close</button>
                <button type="submit" class="buttonRight">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
  export default {
    name: 'WordModal',
    props: {
      show: Boolean,
    },
    components:
    {
      // modal: {template: '#modal-template'}
    },
    data() {
      return {
        newEng: '',
        newEngEx: '',
        newRus: '',
        newRusEx: '',
        error: '',
      }
    },
    methods: {
      close() {
        this.$emit('escape');
      },
      saveWord()
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
          this.$emit('wordSaved', data);        
        })

      },  
    }
  }
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 400px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  .modalInput {
    padding: 10px;
    width: 350px;
    font-family: sans-serif;
  }

  .buttonDiv {
    /* display: flex;
    flex-direction: row; */
  }

  .buttonLeft {
    padding: 10px 15px 10px 15px;
    background-color: #ff1e1e;
    border-style: solid;
    border-color: #ff1e1e;
    border-width: 3px;
    border-radius: 6px;
    color: white;
  }

  .buttonRight {
    margin-left: 10px;
    padding: 10px 15px 10px 15px;
    color: white;
    background-color: #44e54a;
    border-style: solid;
    border-color: #44e54a;
    border-width: 3px;
    border-radius: 6px;
  }

  /*
  * The following styles are auto-applied to elements with
  * transition="modal" when their visibility is toggled
  * by Vue.js.
  *
  * You can easily play with the modal transition by editing
  * these styles.
  */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
