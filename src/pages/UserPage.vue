<template>
    <div v-if="user">
        <div class="user-name">
            <h2>{{user.fname + ", " + user.lname}}</h2>
            <div class="button-container">
                <b-button variant="outline-primary" v-b-modal.modal-2>Update Profile</b-button>
                <b-button variant="outline-danger" v-b-modal.modal-1>Delete Profile</b-button>
            </div>
        </div>

        <div>
            
            <b-modal id="modal-1" title="Deleting Profile" 
            @hidden="resetModal" @show="resetModal" @ok="deleteProfile"
            ok-title="DELETE" ok-variant="danger"
              >
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label"><ui-icon class="icon" >email</ui-icon></label>
                    <div class="col-sm-10">
                      <input type="text" readonly class="form-control-plaintext" id="staticEmail" :value="user.email">
                    </div>
                </div>
                
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label"><ui-icon >lock</ui-icon></label>
                    <div class="col-sm-10">
                        <b-form-input  size="md" 
                            v-model="password"
                            type="password"
                            placeholder="Enter password"
                            required
                        ></b-form-input>
                    </div>
                </div>
            </b-modal>
        </div>


        <div>            
            <b-modal id="modal-2" title="Update Profile" 
            @hidden="resetModal" @show="resetModal" @ok="updateProfile"
            ok-title="Update" ok-variant="primary"
              >
                <div class="mb-3 row">
                    <label for="staticEmail1" class="col-sm-2 col-form-label"><ui-icon class="icon" >email</ui-icon></label>
                    <div class="col-sm-10">
                      <b-form-input id="staticEmail1" size="md" v-model="email" type="email"  ></b-form-input>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputFName" class="col-sm-2 col-form-label"><ui-icon >person</ui-icon></label>
                    <div class="col-sm-10">
                        <b-form-input id="inputFName" size="md" v-model="fname" type="text"  ></b-form-input>
                    </div>
                </div>                
                <div class="mb-3 row">
                    <label for="inputLName" class="col-sm-2 col-form-label"><ui-icon >person</ui-icon></label>
                    <div class="col-sm-10">
                        <b-form-input id="inputLName" size="md" v-model="lname" type="text"  ></b-form-input>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword1" class="col-sm-2 col-form-label"><ui-icon >lock</ui-icon></label>
                    <div class="col-sm-10">
                        <b-form-input  
                            id="inputPassword1"
                            size="md" 
                            v-model="password"
                            type="password"
                            placeholder="Enter your password"
                            required
                        ></b-form-input>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputNewPassword" class="col-sm-2 col-form-label"><ui-icon >lock</ui-icon></label>
                    <div class="col-sm-10">
                        <b-form-input 
                            id="inputNewPassword" 
                            size="md" 
                            v-model="newPassword"
                            type="password"
                            placeholder="Enter new password"
                            
                        ></b-form-input>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword1" class="col-sm-2 col-form-label"><ui-icon >lock</ui-icon></label>
                    <div class="col-sm-10">
                        <b-form-input  
                            id="inputPassword2"
                            size="md" 
                            v-model="password2"
                            type="password"
                            placeholder="Re-Enter new password"
                            
                        ></b-form-input>
                    </div>
                </div>
            </b-modal>
        </div>

        <b-modal id="modal-3" title="Update Passenger Info" 
            @hidden="resetModal3" @show="fetchInfo" @ok="updateTicket"
            ok-title="Save" ok-variant="success"
              >
                <div class="mb-3 row">
                    <label for="pfname" class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-10">
                      <b-form-input id="pfname" size="md"  v-model="pfname" type="text"  required ></b-form-input>
                    </div>
                </div>
                
                <div class="mb-3 row">
                    <label for="plname" class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-10">
                        <b-form-input id="plname" size="md"  v-model="plname" type="text"  required ></b-form-input>
                    </div>
                </div>

                <div class="mb-3 row">
                    <label for="pdob" class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-10">
                        <b-form-input id="pdob" size="md"  v-model="pdob" type="text"  required ></b-form-input>
                    </div>
                </div>
            </b-modal>

            <b-modal centered  id="modal-4" ok-title="Yes" cancel-title="No"  ok-variant="danger" @ok="cancelTicket" >Are you sure want to cancel?</b-modal>
        <div >
            <div v-for="ticket in tickets" :key="ticket.id" class="ticket-container">
                <TicketCard v-if="screenSize > 600" :ticket="ticket" />
                <VerticalTicket v-else :ticket="ticket" />

                <b-button-group class="mx-1 mt-1">
                    <b-button variant="outline-primary" v-b-modal.modal-3 @click="() => selectTicket(ticket)">Update</b-button>
                    <b-button variant="outline-danger" v-b-modal.modal-4 @click="() => selectTicket(ticket)">Cancel</b-button>
                </b-button-group>
            </div>
        </div>

    </div>
    <div v-else><h1>404 Page not found</h1></div>
</template>

<script>
import { GetAllTicketsOfUser, CancelTicket, UpdateTicketOfUser } from '../services/Ticket'
import { DeleteUser, UpdateUser } from '../services/User'
import TicketCard from '../components/TicketCard.vue'
import VerticalTicket from '../components/VerticalTicket.vue'
export default {
    name: 'UserPage',
    props: {
        user: Object
    },
    components: {
        TicketCard,
        VerticalTicket
    },
    data: () => ({
        screenSize: window.innerWidth ,
        tickets: null,
        password: '',
        password2: '',
        newPassword: '',
        email: '',
        fname: '',
        lname: '',
        pfname: '',
        plname: '',
        pdob: '',
        selectedTicket: null
    }),
    mounted(){
        this.getAllTickets()
        this.email = this.user.email,
        this.fname = this.user.fname,
        this.lname = this.user.lname
    },
    methods: {
        async getAllTickets() {
            const tickets = await GetAllTicketsOfUser(this.user.id)
            this.tickets = tickets       
        },
        async deleteProfile(){
            console.log("Hello")
            await DeleteUser(this.user.id, this.password)
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            this.$emit('setUser', null)
            console.log("After")
            this.$router.push('/')
        },
        async updateProfile(){
            if (this.newPassword === this.password2 && this.password) {
                const data = {
                    email: this.email,
                    fname: this.fname,
                    lname: this.lname,
                    password: this.password,
                    newPassword: this.newPassword
                }
                const user = await UpdateUser(this.user.id, data)
                this.$emit('setUser', user)
            }
        },
        fetchInfo(){
            this.pfname = this.selectedTicket.passenger.fname
            this.plname = this.selectedTicket.passenger.lname
            this.pdob = this.selectedTicket.passenger.dob
        },
        resetModal(){
            this.password = ''
            this.newPassword = ''
            this.password2 = ''
            this.email = this.user.email
            this.fname = this.user.fname,
            this.lname = this.user.lname
        },
        selectTicket(ticket){
            this.selectedTicket = ticket
        },
        async cancelTicket(){
            await CancelTicket(this.selectedTicket.id)
            this.getAllTickets()
        },
        async updateTicket(){
            const passenger = {
                lname: this.plname,
                fname: this.pfname,
                dob: this.pdob
            }
            await UpdateTicketOfUser(this.selectedTicket.id, passenger)
            this.getAllTickets()
        }
    }
}
</script>

<style scoped>
    
    .ticket-container {
        margin-bottom: 30px;
    }
    .user-name {
        margin: 20px 0;
    }
    .button-container {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-bottom: 30px;
    }
    
</style>