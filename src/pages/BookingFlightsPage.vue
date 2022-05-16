<template>
    <div v-if="flights">
        <div class="result" v-for="flight in flights" :key="flight.id">
            <FlightCard  :flight="flight" />
            <BookingForm @bookingTickets="bookingTickets" />
            <button type="button" class="btn btn-danger">Cancel</button>
        </div>
        
    </div>
</template>

<script>
import FlightCard from '../components/FlightCard.vue'
import BookingForm from '../components/BookingForm.vue'
export default {
    name: "BookingFlightsPage",
    props: {
        flights: Array
    },
    components: {
        FlightCard,
        BookingForm
    }
}
</script>