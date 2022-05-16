<template>
    <div v-if="tickets">
        <div v-if="screenSize > 600">
            <TicketCard  v-for="ticket in tickets" :key="ticket.id" :ticket="ticket"/>
        </div>
        <div v-else>
            <VerticalTicket  v-for="ticket in tickets" :key="ticket.id" :ticket="ticket"/>
        </div>
        
    </div>
</template>

<script>
import TicketCard from './TicketCard.vue'
import VerticalTicket from './VerticalTicket.vue'
export default {
    name: 'TicketContainer',
    data: () => ({
        screenSize: window.innerWidth 
    }),
    components: {
        TicketCard,
        VerticalTicket        
    },
    mounted() {
        this.screenSize = window.innerWidth 
    },
    props: {
        tickets: Array
    }
}
</script>