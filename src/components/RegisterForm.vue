<template>
    <div>        
        <b-form @submit="onSubmit" @reset="onReset">          
            <b-container fluid>
                
            <b-row class="my-1 row">  
                <b-col sm="1">          
                <ui-textfield-icon >email</ui-textfield-icon>
                </b-col>
                <b-col sm="4">
                <b-form-input
                v-model="email"
                type="email"
                placeholder="Enter email"
                required
                ></b-form-input>
                </b-col>
            </b-row>
                 
            <b-row class="my-1 row"> 
                <b-col sm="1">            
                <ui-textfield-icon >perm_identity</ui-textfield-icon>
                </b-col>
                <b-col sm="4">
                <b-form-input
                v-model="fname"
                type="text"
                placeholder="Enter first name"
                required
                ></b-form-input>
                </b-col>
            </b-row>

            <b-row class="my-1 row">            
                <b-col sm="1">
                <ui-textfield-icon >perm_identity</ui-textfield-icon>
                </b-col>
                <b-col sm="4">
                <b-form-input
                v-model="lname"
                type="text"
                placeholder="Enter last name"
                required
                ></b-form-input>
                </b-col>
            </b-row>

            <b-row class="my-1 row">
                <b-col sm="1">              
                <ui-textfield-icon >lock</ui-textfield-icon>
                </b-col>
                <b-col sm="4">
                <b-form-input
                v-model="password"
                type="password"
                placeholder="Enter password"
                required
                ></b-form-input>
                </b-col>
            </b-row>

            <b-row class="my-1 row">               
                <b-col sm="1">
                <ui-textfield-icon >lock</ui-textfield-icon>
                </b-col>                
                <b-col sm="4">
                <b-form-input
                v-model="rePassword"
                type="password"
                placeholder="Re-Enter password"
                required
                ></b-form-input>
                </b-col>
            </b-row>           

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
             </b-container>
        </b-form>
            
    </div>
</template>

<script>
import { RegisterUser } from '../services/User'
export default {
    name: 'RegisterForm',
    data: () => ({
        email: null,
        fname: null,
        lname: null,
        password: null,
        rePassword: null
    }),
    methods: {
       
        clearAll(){
            this.email = null
            this.fname = null
            this.lname = null
            this.password = null,
            this.rePassword = null
        },
        async onSubmit(e) {
            e.preventDefault()
            console.log(this.password.length)
            if ( this.password.length >= 8 && this.password === this.rePassword){
                const newUser = {
                    email: this.email,
                    fname: this.fname,
                    lname: this.lname,
                    password: this.password,
            }
            await RegisterUser(newUser)
            this.clearAll()      

            this.$router.push('/login')
            }
        },
        
      onReset(event) {
        event.preventDefault()
        this.clearAll()
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
     margin: 5px;
 }
</style>