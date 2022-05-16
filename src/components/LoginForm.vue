<template>
    <div>
         <b-form @submit="login"  >
            <b-container fluid>
                <b-row class="my-1 row">
                    <b-col sm="1">
                    <label for="input-small"><ui-textfield-icon>email</ui-textfield-icon></label>
                    </b-col>
                    <b-col sm="4">
                    <b-form-input id="input-default" 
                    size="lg" 

                    v-model="email"
                    type="email"
                    placeholder="Enter email"
                    required
                    ></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="my-1 row">
                    <b-col sm="1">
                    <label for="input-default"><ui-textfield-icon >lock</ui-textfield-icon></label>
                    </b-col>
                    <b-col sm="4">
                    <b-form-input id="input-default" size="lg" 
                    v-model="password"
                    type="password"
                    placeholder="Enter password"
                    sm={}
                    required
                    ></b-form-input>
                    </b-col>
                </b-row>

                
            </b-container>
            

            <b-button type="submit" variant="primary" @click="login">Login</b-button>
        </b-form>
    </div>
</template>

<script>
import { LogInUser } from '../services/User'
export default {
    name: "LoginForm",
    data: () => ({
        email: null,
        password: null
    }),
    methods: {
        async login() {
            const data = {
                email: this.email,
                password: this.password
            }
            const user = await LogInUser(data)            
            this.$emit('setUser', user)
            this.$router.push('/profile')
        }
    }
}
</script>

<style scoped>
 .row {
     display: flex;
     justify-content: center;
     align-items: center;
     gap: 0;
 }

 button {
     margin-top: 30px;
 }
</style>