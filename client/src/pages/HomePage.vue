<template>
    <div>
        <div v-if="booking">
            <BookingForm @getPassegerInfo="getPassegerInfo" />

        </div>
        <b-overlay :show="show" rounded="sm" v-else>
            <div :aria-hidden="show ? 'true' : null">
                <b-tabs content-class="mt-3">
                    <b-tab title="Space Flight" active>
                        <b-tabs content-class="mt-3">
                            <b-tab title="Round-Trip" active>
                                <SpaceFlightRoundTripForm @handleClickSearch="handleClickSearch" />
                            </b-tab>
                            <b-tab title="One-Way">
                                <DatePlanetForm @handleClickSearch="handleClickSearch"/>
                            </b-tab>
                    </b-tabs>
                    </b-tab>
                    <b-tab title="Flight">
                        <b-tabs content-class="mt-3">
                            <b-tab title="Round-Trip" active>
                                <FlightRoundTripForm @handleClickSearch="handleClickSearch" />
                            </b-tab>
                            <b-tab title="One-Way" active>
                                <DateAirportForm @handleClickSearch="handleClickSearch"/>
                            </b-tab>                            
                        </b-tabs>
                    </b-tab>                    
                </b-tabs>
                <div class="result" v-if="flights">
                    Show results here
                    <FlightCard v-for="flight in flights" :key="flight.id" :flight="flight" @toggleBooking="toggleBooking" />
                </div>
                <div class="result" v-if="returnFlights">
                    Return Flights:
                    <FlightCard v-for="flight in returnFlights" :key="flight.id" :flight="flight" @toggleBooking="toggleBooking" />
                </div>
            </div>
            
        </b-overlay>
    </div>
</template>

<script>
import BookingForm from '../components/BookingForm.vue'
import DateAirportForm from '../components/DateAirportForm.vue'
import FlightRoundTripForm from '../components/FlightRoudTripForm.vue'
import DatePlanetForm from '../components/DatePlanetForm.vue'
import SpaceFlightRoundTripForm from '../components/SpaceFlightRoundTripForm.vue'
import FlightCard from '../components/FlightCard.vue'

import { searchFlight } from '../services/Flight'
import { BookTicket } from '../services/Ticket'
export default {
    name: 'HomePage',
    props: {
        user: Object
    },
    data: () => ({
        passenger : null,
        flight: null,
        show: false,
        flights: null,
        returnFlights: null,
        booking: false
    }),
    components: {
        BookingForm,
        DateAirportForm,
        FlightRoundTripForm,
        DatePlanetForm,
        SpaceFlightRoundTripForm,
        FlightCard
    },
    methods: {
        async getPassegerInfo(passenger) {
            this.passenger = passenger
            const ticket = await BookTicket(this.user, passenger, this.flight )
            this.$router.push(`/tickets/${ticket.id}`)
        },
        toggleShow() {
            this.show = !this.show
        },
        async handleClickSearch(flightType, ticketType, flight1, flight2){
            this.show = true
            if ( ticketType === 'one way'){
                const flights = await searchFlight(flightType, ticketType, flight1)
                this.flights = flights
            } else {
                const res = await searchFlight(flightType, ticketType, flight1, flight2)
                this.flights = res.flights
                this.returnFlights = res.returnFlights
            }             
            setTimeout(this.toggleShow, 1000)                      
        },
        toggleBooking(flight){
            this.flight = flight
            this.booking = !this.booking
        }
    }

}
</script>