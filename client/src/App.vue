<template>
  <div id="app">
    <ui-drawer>
      <ui-drawer-header>
        <ui-drawer-title>Menu</ui-drawer-title>
      </ui-drawer-header>
      <ui-drawer-content>
        <ui-nav>
          <ui-nav-item active><router-link to="/"  name="HomePage">Home</router-link></ui-nav-item>
          <ui-nav-item active><router-link to="/register">Register</router-link></ui-nav-item>
          <ui-nav-item active><router-link to="/login">Login</router-link></ui-nav-item>
        </ui-nav>
      </ui-drawer-content>
    </ui-drawer>
    <main>
      <router-view @setUser="setUser" :user="user"></router-view>
    </main>
  </div>
</template>

<script>
// import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  data: () => ({
    user : null
  }),
  components: {
    // NavBar
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
  margin-top: 60px;
}
</style>
