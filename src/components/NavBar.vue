<template>
  <div>      
      <nav class="navbar navbar-expand-sm navbar-dark bg-secondary nav-bar">
        <div class="container-fluid d-flex  justify-content-between nav-container dropstart">
          <a class="navbar-brand" href="/"><img src="../assets/android-chrome-192x192.png" class="d-inline-block align-top" alt="Kitten"></a>
          <div>
            <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse ml-auto dropstart" id="navbarNav">
              <ul class="navbar-nav">              
                <li class="nav-item">
                  <a class="nav-link" href="/explore"><ui-icon class="icon">public</ui-icon></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/booking"><div class="position-relative"><ui-icon class="icon ">shopping_cart</ui-icon>
                    <span v-if="cart" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {{cart}}
                    </span></div>
                      
                  </a>
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
                <!-- <li class="nav-item" v-if="user">
                  <a class="nav-link" href="#"><ui-icon @click="updateProfile" class="icon">manage_accounts</ui-icon></a>
                </li>
                <li class="nav-item" v-if="user">
                  <a class="nav-link" href="#" @click="deleteProfile"><ui-icon class="icon">no_accounts</ui-icon></a>
                </li> -->
                
                
                <li class="nav-item" v-if="user">
                  <a class="nav-link" href="/" @click="logOut"><ui-icon class="icon" >logout</ui-icon></a>
                </li>
                
              </ul>
            </div>

          </div>

          
        </div>
      </nav>
  </div>
    
</template>

<script>
  export default {
    name: 'NavBar',
    props: {
      user: Object,
      cart: Number
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
.navbar-nav {
  display: flex;
  flex-direction: column;
}
.navbar-toggler {
  height: 100%;
}
.nav-container {
  max-height: 7vh;
  padding: 0;
}
.nav-container button {
  max-height: 7vh;
}
.nav-bar {
  width: 100vw;
  max-height: 7vh;
  padding-right: 20px;
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