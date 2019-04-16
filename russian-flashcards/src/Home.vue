<template>
  <div class='main-container' id='app'>  
    <div class='container'>
      <br>
      <h3 class='center-text'>Words</h3>
      <br>
      <div class='card-row'>
        <div class='card-column' v-for='word in words' v-bind:key='word.eng'>
          <div v-bind:class='[ word.show_eng ? "card" : "card-inverse" ]'>
            <div>
              <p class='card-text center-text large' v-if='word.show_eng'>{{word.eng}}</p>
              <p class='card-text center-text large' v-else>{{word.rus}}</p>
              <p class='card-text pad-bottom' v-if="word.show_eng">example:  {{word.ex_e}}</p>
              <p class='card-text pad-bottom' v-else>пример:  {{word.ex_r}}</p> 
            </div>    
            <div class='buttonDiv'>
              <div class='buttonLeft'>
                <button type='button' class='btn btn-danger btn-sm' @click='deleteWord(word)'>
                  <i class="fas fa-trash"></i>
                </button>
              </div>
              <div class='buttonRight'>
                <button type='button' class='btn btn-sm buttonLong' 
                        v-bind:class='[word.show_eng ? "btn-dark" : "btn-light"]' 
                        @click='wordClicked(word)'>
                  <i class="fas fa-angle-double-right"></i>
                </button>
              </div>
            </div>       
          </div>
        </div>
        <div class='card-column'>
          <div class='add-spacer'></div>
          <button class='btn btn-success' data-toggle="modal" data-target="#wordModal">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>

      <div id='deleteDiv'>
        <button type='button' class='btn btn-danger' @click='deleteWords()'>Delete All Words</button>
      </div>


      <br>
      <br>
      <hr>
      <h3 class='center-text'>Phrases</h3>
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
                  <button type='button' class='btn btn-danger btn-sm'>
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
                <div class='buttonRight'>
                  <button type='button' class='btn btn-sm buttonLong' 
                          v-bind:class='[ phrase.show_eng ? "btn-dark" : "btn-light" ]' 
                          @click='phraseClicked(phrase)'>
                    <i class="fas fa-angle-double-right"></i>
                  </button>
                </div>
              </div>       
            </div>
          </div>
          <div class='card-column'>
            <div class='add-spacer'></div>
            <button class='btn btn-success' data-toggle="modal" data-target="#phraseModal">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>

      <div id='deleteDiv'>
        <button type='button' class='btn btn-danger' @click='deletePhrases()'>Delete All Phrases</button>
      </div>
  

      <div class='empty-large'></div>
    </div> 


    <!-- Word Modal -->
    <div class="modal" tabindex="-1" role="dialog" id="wordModal" @hidden.bs.modal="modalClose">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Word</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="input-group">
              <input id="engInput" type="text" class="form-control modal-input" placeholder="English word" v-model="newEng">
            </div>
            <div class="input-group">
              <textarea id="engExInput" class="form-control modal-input" placeholder="English example" v-model="newEngEx"></textarea>
            </div>
            <div class="input-group">
              <input id="rusInput" type="text" class="form-control modal-input" placeholder="Russian word" v-model="newRus">
            </div>
            <div class="input-group">
              <textarea id="rusExInput" class="form-control modal-input" placeholder="Russian example" v-model="newRusEx"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" id="saveButton" class="btn btn-primary" @click="addWord">Save changes</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Phrase Modal -->
    <div class="modal" tabindex="-1" role="dialog" id="phraseModal" @hidden.bs.modal="modalClose">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add New Phrase</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="input-group">
                <textarea id="engPInput" class="form-control modal-input" placeholder="English phrase" v-model="newEngP"></textarea>
              </div>
              <div class="input-group">
                <textarea id="rusPInput" class="form-control modal-input" placeholder="Russian phrase" v-model="newRusP"></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" id="saveButton" class="btn btn-primary" @click="addPhrase">Save changes</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  <!-- end app -->
  </div> 
</template>



<script>

</script>



<style>

</style>