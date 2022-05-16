<template>
    <!-- <div>
        <ui-form nowrap item-margin-bottom="16" label-width="80">
            <template #default="{ subitemClass, actionClass }">
                <ui-form-field>
                    <ui-textfield maxlength="20"  :modelValue="email" @keydown="(e)=>onChange(e, 'email')"  >
                        <template #before>
                        <ui-textfield-icon >email</ui-textfield-icon>
                        </template>
                        Email
                        <template #after>
                        <ui-textfield-icon trailing @click="()=>clear('email')">delete</ui-textfield-icon>
                        </template>
                    </ui-textfield>
                </ui-form-field>

                <ui-form-field>
                    <ui-textfield maxlength="20" v-model="fname">
                        <template #before>
                        <ui-textfield-icon>perm_identity</ui-textfield-icon>
                        </template>
                        First Name
                        <template #after>
                            <ui-textfield-icon trailing @click="()=>clear('fname')" >delete</ui-textfield-icon>                      
                        </template>
                    </ui-textfield>
                </ui-form-field>

                <ui-form-field>
                    <ui-textfield maxlength="20" v-model="lname" >
                        <template #before>
                        <ui-textfield-icon>perm_identity</ui-textfield-icon>
                        </template>
                        Last Name
                        <template #after>
                        <ui-textfield-icon trailing  @click="()=>clear('lname')">delete</ui-textfield-icon>
                        </template>
                    </ui-textfield>
                </ui-form-field>

                <ui-form-field >
                    <div>
                        <ui-textfield
                        v-model="password"
                        input-type="password"
                        required
                        pattern=".{8,}"
                        helper-text-id="pw-validation-msg"
                        :attrs="{autocomplete: 'current-password'}"
                        >
                            <template #before>
                                <ui-textfield-icon>lock</ui-textfield-icon>
                            </template>
                            Choose password
                            <template #after>
                                <ui-textfield-icon trailing  @click="()=>clear('password')">delete</ui-textfield-icon>
                            </template>                    
                        </ui-textfield>  
                        <ui-textfield-helper id="pw-validation-msg" visible validMsg>
                            Must be at least 8 characters long
                        </ui-textfield-helper>
                    </div>
                </ui-form-field>

                <ui-form-field >
                    <div>
                        <ui-textfield
                        v-model="rePassword"
                        input-type="password"
                        required
                        pattern=".{8,}"
                        helper-text-id="pw-validation-msg"
                        :attrs="{autocomplete: 'current-password'}"
                        >
                            <template #before>
                                <ui-textfield-icon>lock</ui-textfield-icon>
                            </template>
                            Re-enter password
                            <template #after>
                                <ui-textfield-icon trailing  @click="()=>clear('rePassword')">delete</ui-textfield-icon>
                            </template>                    
                        </ui-textfield>
                    </div>
                </ui-form-field>
                
                
                <ui-form-field>
                    <label>Checkbox:</label>
                    <div :class="subitemClass">
                        <ui-form-field v-for="i in 3" :key="i">
                        <ui-checkbox :value="i" :input-id="`checkbox-${i}`"></ui-checkbox>
                        <label :for="`checkbox-${i}`">Checkbox {{ i }}</label>
                        </ui-form-field>
                    </div>
                </ui-form-field>
                <ui-form-field>
                <label>Radio:</label>
                <div :class="subitemClass">
                    <ui-form-field v-for="i in 3" :key="i">
                    <ui-radio
                        v-model="checkedValue"
                        :value="i"
                        :input-id="`radio-${i}`"
                    ></ui-radio>
                    <label :for="`radio-${i}`">Radio {{ i }}</label>
                    </ui-form-field>
                </div>
                </ui-form-field>
                <ui-form-field :class="actionClass">
                <ui-button raised @click="onSubmit">Submit</ui-button>
                <ui-button outlined @click="cancel">Cancel</ui-button>
                </ui-form-field>
            </template>
            </ui-form>
    </div> -->
    <div>
        <b-form @submit="onSubmit" @reset="onReset">
            
            
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
                <ui-textfield-icon >perm_identity</ui-textfield-icon>
                <b-form-input
                v-model="fname"
                type="text"
                placeholder="Enter first name"
                required
                ></b-form-input>
            </div>

            <div>              
                <ui-textfield-icon >perm_identity</ui-textfield-icon>
                <b-form-input
                v-model="lname"
                type="text"
                placeholder="Enter last name"
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

            <div>              
                <ui-textfield-icon >lock</ui-textfield-icon>
                <b-form-input
                v-model="rePassword"
                type="password"
                placeholder="Re-Enter password"
                required
                ></b-form-input>
            </div>

            

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
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
 
</style>