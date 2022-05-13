<template>
    <div >
       
        <b-card
            v-if="flight"
            overlay
            img-src="https://thumbs.dreamstime.com/z/flight-route-aircraft-shape-heart-smoky-line-trace-airliner-realistic-icon-airplane-blue-sky-clouds-vector-d-144806046.jpg"
            img-alt="Image"                        
            style="max-width: 35em; max-height: auto;"
            class="mb-2"
        >    {{displayDate()}} 
            
            <b-card-text>
               Time: {{displayTime()}}
            </b-card-text>
            
            <b-card-text v-if="flight['departure_airport']">
                From: {{flight['departure_airport'].name}}
            </b-card-text>

            <b-card-text v-if="flight['departure_planet']">
                From: {{flight['departure_planet'].name}}
            </b-card-text>

            <b-card-text>
                To: {{flight['arrival_airport'].name}}
            </b-card-text>
            
            <b-card-text>
                Aircraft: {{flight['aircraft'].type + " " + flight['aircraft'].name}}
            </b-card-text>

            <b-card-text>
                Price: ${{99}}
            </b-card-text>

            <!-- <b-card-text>
                From: {{flight.arival_airport.name}}
            </b-card-text>
            <b-card-text>
                Aircraft: {{flight.aircraft.type + " " + flight.aircraft.name}}
            </b-card-text> -->

            <!-- <b-button href="#" variant="primary">Go somewhere</b-button>  -->
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'FlightCard',
    props: {
        flight: Object
    },
    methods: {
        displayDate(){
            const date = new Date(this.flight.date)
            return  date.getMonth() + '/' + date.getDate()
            // return date.format('MMM d')
        },
        displayTime(){
            const date = new Date(this.flight.date)
            let minutes = date.getMinutes()
            if (minutes === 0){
                minutes = '00'
            } else if (minutes < 10) {
                minutes = '0' + minutes
            } 
            return  date.getHours() + ':' + minutes + ' CST'
        }        
    }
}
</script>