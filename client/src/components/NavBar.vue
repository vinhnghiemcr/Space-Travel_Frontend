<template>
  <div>
    <div>
      <!-- Image and text -->
      <!-- <b-navbar variant="faded" type="light">
        <b-navbar-brand href="#">
          <img src="../assets/infinity-03.png" class="d-inline-block align-top" alt="Kitten">          
        </b-navbar-brand>
        <b-navbar-nav>
          <router-link to="/" name="HomePage">Home</router-link>
          <router-link to="/register">Register</router-link>
          <router-link to="/login">Login</router-link>
        </b-navbar-nav>
      </b-navbar> -->

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"><img src="../assets/infinity-03.png" class="d-inline-block align-top" alt="Kitten"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">              
              <li class="nav-item">
                <a class="nav-link" href="/explore">Explore</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/register">Regiser</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
    
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
img {
  height: 10vh;;
}
</style>