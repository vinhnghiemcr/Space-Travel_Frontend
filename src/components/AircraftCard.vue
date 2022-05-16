<template>
    <div v-if="aircraft">
        <h2>{{aircraft.type + ': ' + aircraft.name}}</h2>
        <img :src="aircraft.img" alt="aircraft image">
    </div>
</template>

<script>
export default {
    name: "AircraftCard",
    props: {
        aircraft: Object
    }
}
</script>

<style scoped>
 img {
     width: 50%;
 }
</style>