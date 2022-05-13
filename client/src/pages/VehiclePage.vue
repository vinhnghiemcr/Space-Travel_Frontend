<template>
    <div>Hello</div>
</template>

<script>
import { GetVehicle } from '../services/Vehicle'
export default {
    name: "VehicalPage",
    data: () => ({
        id: null,
        type: '',
        vehicle: null
    }),
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