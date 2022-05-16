<template>
    <div class="booking-container">        
        <b-overlay class="booking-tabs" :show="show" rounded="sm" v-if="!booking">
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
                    Outbound Flights:
                    <FlightCard v-for="flight in flights" :key="flight.id" :flight="flight" @toggleBooking="toggleBooking" />
                </div>
                <div class="result" v-if="returnFlights">
                    Return Flights:
                    <FlightCard v-for="flight in returnFlights" :key="flight.id" :flight="flight" @toggleBooking="toggleBooking"  />
                </div>
            </div>            
        </b-overlay>
        <div v-else-if="issueTicket">
            <BookingForm @bookingTickets="bookingTickets" />
        </div>
        <div v-else>
            <TicketContainer :tickets="tickets" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import BookingForm from '../components/BookingForm.vue'
import DateAirportForm from '../components/DateAirportForm.vue'
import FlightRoundTripForm from '../components/FlightRoudTripForm.vue'
import DatePlanetForm from '../components/DatePlanetForm.vue'
import SpaceFlightRoundTripForm from '../components/SpaceFlightRoundTripForm.vue'
import FlightCard from '../components/FlightCard.vue'
import TicketContainer from '../components/TicketContainer.vue'

import { searchFlight } from '../services/Flight'
import { BookTicket, UpdateTicket } from '../services/Ticket'
const BASE_URL = "https://infinitude-and-beyond.herokuapp.com/ticket/"
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
        booking: false,
        issueTicket: false,
        tickets: [],
        selectedFlights: []
    }),
    components: {
        BookingForm,
        DateAirportForm,
        FlightRoundTripForm,
        DatePlanetForm,
        SpaceFlightRoundTripForm,
        FlightCard,
        TicketContainer
    },
    methods: {
        async bookingTickets(passenger) {
            this.passenger = passenger
            let ticket = await BookTicket(this.user, passenger, this.flight )
            const route = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + BASE_URL + ticket.id
            this.createQRCode(route)
            ticket = await UpdateTicket(ticket.id, route )
            this.tickets.push(ticket)
            this.issueTicket = true
        },
        async createQRCode(route){
            await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${route}`)
        },
        async handleClickSearch(flightType, ticketType, flight1, flight2){
            this.show = true
            const toggleShow = async () => {
                this.show = !this.show
                if ( ticketType === 'one way'){
                const flights = await searchFlight(flightType, ticketType, flight1)
                this.flights = flights
            } else {
                const res = await searchFlight(flightType, ticketType, flight1, flight2)
                this.flights = res.flights
                this.returnFlights = res.returnFlights
            }     
            }
            setTimeout(toggleShow, 1000)                     
        },
         toggleBooking(flight){
            this.flight = flight
            this.booking = !this.booking
        },
        // selectFlight(flight) {
        //     if (!this.selectedFlights.includes(flight)){
        //         this.selectedFlights = [...this.selectedFlights, flight]
        //     } else {
        //         this.selectedFlights = this.selectedFlights.filter((f) => f !== flight)
        //     }
        //     this.$emit('setCart', this.selectedFlights )
        // }
    }

}
</script>

<style scoped>
    .booking-tabs {
        width: 800px;
        min-width: 500px;
    }
    .booking-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }

    @media only screen and (max-width: 695px) {
        .booking-tabs {
            width: 100vw;
            min-width: 0;
        }
        
        
    }
</style>

