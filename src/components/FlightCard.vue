<template>
    <div >

        <div class="flight-container"  @click="handleSelect" >
            <img src="../assets/infinity.png" alt="logo image">
            <div>{{displayDate()}}</div>
            <div>{{displayTime()}}</div>
            <div v-if="flight['departure_airport']" >{{flight['departure_airport'].code}}</div>
            <div v-if="flight['departure_planet']" >{{flight['departure_planet'].code}}</div>
            <div><ui-icon>arrow_right_alt</ui-icon></div>
            <div v-if="flight['arrival_airport']" >{{flight['arrival_airport'].code}}</div>
            <div v-if="flight['arrival_planet']" >{{flight['arrival_planet'].code}}</div>
            <div v-if="flight['aircraft']" >{{flight['aircraft'].type + " " + flight['aircraft'].name}}</div>
            <div v-if="flight['rocket']" >{{flight['rocket'].type + " " + flight['rocket'].name}}</div>
            <div>{{flight.capacity}}</div>
            <div id="price" > ${{flight.price}}</div>
        </div>

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
        },
        handleSelect(){
            this.$emit('toggleBooking', this.flight)
            // e.target.classList.toggle("selected")
        }     
    }
}
</script>

<style scoped>
    .selected {
        background-color: darkgreen;
    }
    .flight-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 0.2fr 1fr 2fr 1fr 1fr;
        justify-content: space-around;
        align-content: center;
        gap: 5px;
        text-align: center;
        background-color: #D4D4D4;
        margin: 10px;
        padding: 10px 0;
        border-radius: 20px;
    }

    .flight-container:hover {
        background-color: #007f6194;
        animation: zoom .2s linear forwards;
        color: white;
    }

    @keyframes zoom {
    0% {
        transform: scale(1.0);
    }
    100% {
        transform: scale(1.008);
    }
    }

    @media only screen and (max-width: 695px) {
        .flight-container {
            grid-template-columns: 1fr;
            padding: 5px;
            justify-items: center;  
        }
        img {
            max-width: 50%;
        }        
        
    }

    button {
        border-radius: 10px;
        padding: 5px;
    }

    div {
        align-self: center;
    }

    img {
        width: 100%;
        padding: 5px;
    }
    
</style>

