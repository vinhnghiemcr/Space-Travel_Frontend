<template>
  <div>      
      <nav class="navbar navbar-expand-lg navbar-dark bg-secondary nav-bar">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"><img src="../assets/android-chrome-192x192.png" class="d-inline-block align-top" alt="Kitten"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse ml-auto" id="navbarNav">
            <ul class="navbar-nav">              
              <li class="nav-item">
                <a class="nav-link" href="/explore"><ui-icon class="icon">public</ui-icon></a>
              </li>
              <li class="nav-item" v-if="!user">
                <a class="nav-link" href="/register"><ui-icon class="icon">app_registration</ui-icon></a>
              </li>
              <li class="nav-item" v-if="!user">
                <a class="nav-link" href="/login"><ui-icon class="icon">login</ui-icon></a>
              </li>
              <li class="nav-item" v-if="user">
                <a class="nav-link" href="/profile"><ui-icon class="icon">person</ui-icon></a>
              </li>
              <li class="nav-item" v-if="user">
                <a class="nav-link" href="#"><ui-icon @click="updateProfile" class="icon">manage_accounts</ui-icon></a>
              </li>
              <li class="nav-item" v-if="user">
                <a class="nav-link" href="#" @click="deleteProfile"><ui-icon class="icon">no_accounts</ui-icon></a>
              </li>
              
              
              <li class="nav-item" v-if="user">
                <a class="nav-link" href="/" @click="logOut"><ui-icon class="icon" >logout</ui-icon></a>
              </li>
              <!-- <div class="btn-group">
                  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <ui-icon >person</ui-icon>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li><button class="dropdown-item" type="button">Action</button></li>
                    <li><button class="dropdown-item" type="button">Another action</button></li>
                    <li><button class="dropdown-item" type="button">Something else here</button></li>
                  </ul>
              </div> -->
            </ul>
          </div>

          
        </div>
      </nav>
  </div>
    
</template>

<script>
  export default {
    name: 'NavBar',
    props: {
      user: Object
    },
    methods: {
      logOut(){
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        this.$emit('setUser', null)
      },
      
    }
  }
</script>

<style scoped>
.nav-bar {
  max-height: 7vh;
}
img {
  max-height: 7vh;
  margin-left: 30px;
}
.icon:hover {
  transition: transform .2s;
  transform: scale(1.3);
}
</style>