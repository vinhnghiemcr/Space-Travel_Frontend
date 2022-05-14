<template>
    <div v-if="destination">
        <div v-if="type === 'airport'">
            <AirportCard :airport="destination"/>
        </div>
        <div v-else>
            <PlanetCard :planet="destination" />
        </div>
    </div>
</template>

<script>
import { GetDestination } from '../services/Destination'
import AirportCard from '../components/AirportCard.vue'
import PlanetCard from '../components/PlanetCard.vue'

export default {
    name: "DestinationPage",
    data: () => ({
        id: null,
        type: '',
        destination: null
    }),
    components: {
        AirportCard,
        PlanetCard,
    },
    mounted(){
        this.type = this.$route.params.type
        this.id = this.$route.params.id
        this.getVehicle()
    },
    methods: {
        async getVehicle() {
            this.destination = await GetDestination(this.type, this.id)
        }
    }
}
</script>