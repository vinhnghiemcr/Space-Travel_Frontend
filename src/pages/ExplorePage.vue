<template>
    <div class="planet-container">
        <div class="card" style="width: 18rem;" v-for="(planet, i) in planets" :key="i">
            <img :src="images[i]" class="card-img-top" alt="planet img">
            <div class="card-body">
                <a :href="'destination/planet/' + IDs[i]" class="btn btn-info">{{planet}}</a>
            </div>
        </div>
    </div>
</template>

<script>
import { GetPlanets } from '../services/Destination'

export default {
    name: "ExplorePage",
    data: () => ({
        IDs: [],
        planets: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        images: [
            'https://i.natgeofe.com/n/c6f7cee9-cde6-44a2-a686-9a80f5bfc1e8/01_mercury_pia15190_orig_4x3.jpg',
            'https://solarsystem.nasa.gov/system/resources/list_images/2524_PIA23791_320.jpg',
            'https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg',
            'https://www.gannett-cdn.com/-mm-/cc8c73d409ccafc0a471025115eb41dd96973ee8/c=0-66-2190-1303/local/-/media/2018/02/01/USATODAY/USATODAY/636530956509572832-GettyImages-647269852-1-.jpg',
            'https://i.natgeofe.com/k/7c7e4173-5ad3-4ef7-8252-354de21430db/jupiter_square.jpg',
            'http://www.nasa.gov/sites/default/files/thumbnails/image/stsci-h-p2043a-f-1592x1137.png',
            'https://ychef.files.bbci.co.uk/976x549/p0257vk5.jpg',
            'https://imageio.forbes.com/specials-images/imageserve/648792456/Neptune/960x0.jpg?fit=bounds&format=jpg&width=960'
        ]
    }),
    mounted() {
        this.getPlanets()
    },
    methods: {
        async getPlanets(){
            const data = await GetPlanets()
            const ids =this.planets.map(planet => data.find((e => e.name.toLowerCase() === planet.toLowerCase())).id )
            console.log(ids, "IDS")
            this.IDs = ids
        }
    }
}
</script>

<style scoped>
    .planet-container {
        display: grid;
        grid-template-rows: repeat(3, 1fr);
    }
</style>