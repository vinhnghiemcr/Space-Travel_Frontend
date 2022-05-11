<template>
    <div>
         <b-form @submit="login" >
            <div>              
                <ui-textfield-icon >email</ui-textfield-icon>
                <b-form-input
                v-model="email"
                type="email"
                placeholder="Enter email"
                required
                ></b-form-input>
            </div>

            <div>              
                <ui-textfield-icon >lock</ui-textfield-icon>
                <b-form-input
                v-model="password"
                type="password"
                placeholder="Enter password"
                required
                ></b-form-input>
            </div>


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