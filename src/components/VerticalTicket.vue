<template>
    <div class="ticket-container">
        <div class="ticket">
            <div class="brand-top">Infinitude</div>
            <div class="dep-arr">
                <div class="large">
                    <router-link :to="departureLink" name="Destination">{{ticket.type === 'flight' ? ticket['flight']['departure_airport'].code : ticket['flight']['departure_planet'].code.toString().substring(0,3)}}</router-link>
                </div>
                <div><img src="../assets/rocket.jpg" alt="rocket icon"/></div>
                <div class="large">
                    <router-link :to="arrivalLink" name="Destination">{{ticket.type === 'flight' ? ticket['flight']['arrival_airport'].code : ticket['flight']['arrival_planet'].code.toString().substring(0,3)}}</router-link>
                </div>
                
                </div>
            <div class="name-section" v-if="ticket.passenger">
                <div class="passenger">
                    <div class="small">Passenger name:</div>
                    <div class="large">{{ticket.passenger.fname + ', ' + ticket.passenger.lname}}</div>
                </div>
                <div class="gate-seat-class">
                    <div class="info">
                        <div class="small">Gate</div>
                        <div class="bold">--</div>
                    </div>
                    <div class="info">
                        <div class="small">Seat</div>
                        <div class="bold">--</div>
                    </div>
                    <div class="info">
                        <div class="small">Class</div>
                        <div class="bold">First</div>
                    </div>
                </div>
            </div>
            <div class="time-section">
               <div class="info">
                   <div class="small">Date</div>
                   <div class="bold">{{ticket['flight'].date}}</div>
                </div> 
               <div class="info">
                   <div  class="small">Time</div>
                   <div class="bold">{{ticket['flight'].time}}</div>
                </div> 
               <div class="info">
                   <div  class="small">Vehicle</div>
                   <div class="bold">
                       <router-link :to="vehicleLink" name="Vehicle">{{ticket.type === 'flight' ? ticket['flight']['aircraft'].name : ticket['flight']['rocket'].name}}</router-link>
                   </div>
                </div> 
               
            </div>
        </div>
        <div class="line"></div>
        <div class="stub">
            <div class="qrcode">
                <img  :src="ticket.qr" alt="qrcode" title="" id="qrcode"/>
            </div>
            <div class="brand-bottom">Infinitude</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "VerticalTicket",
    props: {
        ticket: Object
    },
    data: () => ({
      vehicleLink: '',
      departureLink: '',
      arrivalLink: ''
    }),
     mounted() {
      this.vehicleLink = "/vehicle/" + (this.ticket.type === 'flight' ? 'aircraft' : 'rocket')  + '/' + (this.ticket.type === 'flight' ? this.ticket['flight'].aircraftId : this.ticket['flight'].rocketId)
      this.departureLink = "/destination/" + (this.ticket.type === 'flight'? 'airport': 'planet') + '/' + (this.ticket.type === 'flight' ? this.ticket['flight'].departureAirportId : this.ticket['flight'].departurePlanetId)
      this.arrivalLink = "/destination/" + (this.ticket.type === 'flight'? 'airport': 'planet') + '/' + (this.ticket.type === 'flight' ? this.ticket['flight'].arrivalAirportId : this.ticket['flight'].arrivalPlanetId)
    }
}
</script>
<style scoped>

    .dep-arr img {
        width: 100px;
    }
    .passenger {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-left: 2em;
    }
    .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .line {
        border-bottom: dashed 2px black;
        width: 90%;
        margin: 0 auto;;
    }
    .large {
        font-size: 1.2em;
        font-weight: bold;
    }
    .bold {
        font-weight: bold;
    }
    .small {
        font-size: 0.7em;
    }
    .ticket-container {
        width: 100%;
        height: 600px;
        border-radius: 20px;
    }
    .ticket {
        height: 70%;
        width: 100%;
        display: grid;
        grid-template-rows: 1fr 2fr 2fr 1fr;
        border-radius: 20px;
        background-color: rgb(255, 255, 255);
    }
    .stub {
        display: grid;
        grid-template-rows: 2fr 1fr;
        height: 30%;
        width: 100%;
        border-radius: 20px;
    }
    .brand-top {
        background-color: orangered;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .brand-bottom {
        background-color: orangered;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .qrcode {
        background-color: gray;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .qrcode img {
        height: 90%;
    }
    .gate-seat-class, .time-section, .dep-arr {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    .dep-arr div {
        align-self: center;
    }
    .name-section {
        display: grid;
        grid-template-rows: 1fr 1fr;
        background-color: rgba(255, 255, 0, 0.623);
        border-radius: 10px;
        margin: 0 20px;
        padding: 10px 0;
    }


</style>