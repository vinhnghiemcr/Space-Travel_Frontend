<template>
    <div v-if="vehicle">
        <div v-if="type === 'aircraft'">
            <AircraftCard :aircraft="vehicle"/>
        </div>
        <div v-else>
            <SpacecraftCard :spacecraft="vehicle" />
        </div>
    </div>
</template>

<script>
import { GetVehicle } from '../services/Vehicle'
import AircraftCard from '../components/AircraftCard.vue'
import SpacecraftCard from '../components/SpacecraftCard.vue'

export default {
    name: "VehicalPage",
    data: () => ({
        id: null,
        type: '',
        vehicle: null
    }),
    components: {
        AircraftCard,
        SpacecraftCard,
    },
    mounted(){
        this.type = this.$route.params.type
        this.id = this.$route.params.id
        this.getVehicle()
    },
    methods: {
        async getVehicle() {
            this.vehicle = await GetVehicle(this.type, this.id)
        }
    }
}
</script>

<style scoped>
    .d-model {
        margin-top: 20px;
        width: 1000px;
    }
</style>