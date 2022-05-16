<template>
    <div v-if="ticket">
        <TicketCard :ticket="ticket" />        
    </div>
</template>

<script>
import { GetTicket } from '../services/Ticket'
import TicketCard from '../components/TicketCard.vue'
export default {
    name: "DisplayTicketPage",
    data: () => ({
        ticket: null
    }),
    components: {
        TicketCard
    },
    mounted(){
        this.getTicket()
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