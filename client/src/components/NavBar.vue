<template>
  <nav>
    <router-link to="/" name="HomePage">Home</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/login">Login</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>