<template>
    <div v-if="ticket">
        <TicketCard v-if="screenSize > 600" :ticket="ticket" />        
        <VerticalTicket v-else :ticket="ticket" />        
    </div>
</template>

<script>
import { GetTicket } from '../services/Ticket'
import TicketCard from '../components/TicketCard.vue'
import VerticalTicket from '../components/VerticalTicket.vue'
export default {
    name: "DisplayTicketPage",
    data: () => ({
        ticket: null,
        screenSize: window.innerWidth 
    }),
    components: {
        TicketCard,
        VerticalTicket
    },
    mounted(){
        this.getTicket()
        this.screenSize = window.innerWidth
    },
    methods: {
        async getTicket(){
            const id = this.$route.params.id
            const ticket = await GetTicket(id)
            this.ticket = ticket
        }
    }
}
</script>