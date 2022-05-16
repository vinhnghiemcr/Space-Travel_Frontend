<template>
    <div v-if="airport">
        <h2>{{airport.name + '(' + airport.code + ')'}}</h2>
        <h4>{{airport.city + ', ' + airport.state_full}}</h4>
        <MapContainer v-if="airport && center" :center="center" :airport="airport" />
    </div>
</template>

<script>
import MapContainer from './MapContainer.vue'
export default {
    name: "AirportCard",
    props: {
        airport: Object
    },
    data: () => ({
        center: {
            lat: null,
            lng: null
        }
        
    }),
    components: {
        MapContainer
    },
    mounted() {
        this.setLatLng()
        //  this.getLat()
    },
    methods: {
        setLatLng() {
            if (this.airport){
                let lat = parseFloat(this.airport.latitude.slice(0,-1))/3600
            if (this.airport.latitude[this.airport.latitude.length - 1] !== 'N') {
                lat = -1* lat
            }
            let lng = parseFloat(this.airport.longtitude.slice(0,-1))/3600
            if (this.airport.longtitude[this.airport.longtitude.length -1] !== 'E') {
                lng = -1 * lng
            }
            
            this.center.lat = lat
            this.center.lng = lng
            }
            
        }
    }
}
</script>

<style scoped>
 img {
     width: 50%;
 }
</style>