<template>

  <div id="app">
    
    <div class="top-bar">
      <NavBar :user="user" @setUser="setUser" />

    </div>
     
    
    <main>
      <router-view @setUser="setUser" :user="user"></router-view>
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  data: () => ({
    user : null
  }),
  components: {
    NavBar
  },
  mounted(){
    if (localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'))
    }
  },
  methods: {
    setUser(user){
      this.user = user
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* .top-bar {
  background-image: url('https://media.wired.com/photos/59268c5dcfe0d93c474309a2/master/w_1600,c_limit/BSP_054.jpg');
  background-size: cover;
  color: aquamarine;
  height: 10vh;
} */

</style>
