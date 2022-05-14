<template>
    <div v-if="planet">
        <h2>{{planet.name}}</h2>
        <iframe :src='planet.img' width='100%' height='450px' frameborder='0' />
        <div class="card-container">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Number of moons:</h5>
                    <p class="card-text">{{planet.num_of_moons}}</p>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Density:</h5>
                    <p class="card-text">{{planet.density + ' '}} kg/m<sup>3</sup></p>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Gravity:</h5>
                    <p class="card-text">{{planet.gravity + ' '}} m/s<sup>2</sup></p>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Equatorial radius:</h5>
                    <p class="card-text">{{planet.equaRadius + ' '}} Km</p>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Average surface Temperature:</h5>
                    <p class="card-text">{{planet.avgTemp + ' '}} K</p>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Mass:</h5>
                    <p class="card-text">{{planet.mass.massValue + ' x 10'}}<sup>{{planet.mass.massExponent}}</sup> Kg</p>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Volume :</h5>
                    <p class="card-text">{{planet.vol.volValue + ' x 10'}}<sup>{{planet.vol.volExponent}}</sup> Km<sup>3</sup></p>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "PlanetCard",
    props: {
        planet: Object
    },   
}
</script>

<style scoped>
    .card-container {
        display: flex;
        flex-wrap: wrap
    }
</style>