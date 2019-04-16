<template>
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
              <input v-model="newEng" placeholder="English word">
              <br>
              <textarea v-model="newEngEx" placeholder="English example"></textarea>
              <br>
              <input v-model="newRus" placeholder="Russian word">
              <br>
              <textarea v-model="newRusEx" placeholder="Russian example"></textarea>
              <br>
              <button type="button" @click="close" class="pure-button">Close</button>
              <button type="submit" class="pure-button pure-button-secondary">Save</button>
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
          data['show_eng'] = false;
          this.words.push(data);
          $('.modal-input').val('');
          $('#wordModal').modal('hide');        
        })

        this.$emit('saveFinished');
      },  
    }
  }
</script>


<style scoped>
  input {
    width: 100%;
  }

  textarea {
    width: 100%;
    height: 100px
  }

  .pure-button-secondary {
    float: right;
  }
</style>