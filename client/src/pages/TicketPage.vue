<template>
    <div v-if="ticket">TicketPage
        <TicketCard :ticket="ticket" :route="route"/>
        
    </div>
</template>

<script>
import axios from 'axios'
import TicketCard from '../components/TicketCard.vue'
import { GetTicket } from '../services/Ticket'

export default {
    name: 'TicketPage',
    components: {
        TicketCard,        
    },
    data: () => ({
        ticket: null,
        route: ''
    }),
    mounted() {
        this.getTicket()
        this.getQRCode()
        this.route = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${this.$route}`
    },
    methods: {
        async getTicket() {
            const id = this.$route.params.id
            const ticket = await GetTicket(id)
            this.ticket = ticket
        },
        async getQRCode(){
            await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${this.$route}`)
        }
    }
}
</script>