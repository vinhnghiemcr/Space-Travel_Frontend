<template>

  <div id="app">
    
    <div class="top-bar">
      <NavBar :user="user" @setUser="setUser"  :cart="cart"/>

    </div>     
    
    <main>
      <router-view @setUser="setUser" :user="user" @setCart="setCart"
      @getFlights="getFlights"
      :flights="flights"
      ></router-view>
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  data: () => ({
    user : null,
    cart: 0,
    flights: []
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
    },
    getFlights(flights) {
      this.cart = flights.length
      this.flights = flights
    },
    setCart(n){
      this.cart = n
    }
  }
}
</script>

<style>
.top-bar {
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
