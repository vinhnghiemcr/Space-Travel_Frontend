<template>
  <div>
    <div>
      <!-- Image and text -->
      <b-navbar variant="faded" type="light">
        <b-navbar-brand href="#">
          <img src="../assets/infinity-03.png" class="d-inline-block align-top" alt="Kitten">          
        </b-navbar-brand>
        <b-navbar-nav>
          <router-link to="/" name="HomePage">Home</router-link>
          <router-link to="/register">Register</router-link>
          <router-link to="/login">Login</router-link>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </div>
    
</template>

<script>
  export default {
    name: 'NavBar',
    data: () => ({
      
    }),
    methods: {
      navHome() {
        this.$router.push('/')
        this.openDrawer= false
      }
    }
  }
</script>

<style scoped>
img {
  height: 15vh;;
}
</style>