<template>
  <div id="app" class='main-container'>
    <div id="nav">
      <router-link to="/words">Words</router-link> |
      <router-link to="/phrases">Phrases</router-link>
    </div>
    <router-view/>

    <!------------- Footer ------------->
    <br><br>
    <div class='my-footer'>
      See this project on Github:&nbsp;&nbsp;
      <a id='footer-link' href="https://github.com/nathanielw9/russian-learner/tree/project5">  https://github.com/nathanielw9/russian-learner/tree/project5 </a>
    </div>
    <!----------- End Footer ----------->
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.main-container {
    min-height: 90vh;
    overflow: hidden;
    display: block;
    position: relative;
    padding-bottom: 35px;
}
.my-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4C4C4C;
    /* margin-top: 40px; */
    height: 35px;
    width: 100%;
    position: relative;
    bottom: 0;
    color: white;
    font-size: small;
}

#footer-link {
    color: white;
}
</style>
