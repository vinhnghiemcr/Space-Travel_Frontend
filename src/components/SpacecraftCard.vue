<template>

    <div v-if="spacecraft">
        <div >
            <h2>{{spacecraft.name}}</h2>
            <h4>Cost per launch: ${{spacecraft.costPerLaunch.toLocaleString()}}</h4>
            <p>{{spacecraft.discription}}</p>
        </div>
        <div >
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="i + 1" :aria-label="'Slide ' + i + 1" v-for="(image, i) in spacecraft.img.filter((img, i) => i !== 0)" :key="i"></button>
                    
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img :src="spacecraft.img[0]" class="d-block w-100" alt="image">
                    </div>
                    <div class="carousel-item" v-for="(image, i) in spacecraft.img.filter((img, i) => i !== 0)" :key="i">
                        <img :src="image" class="d-block w-100" alt="image">
                    </div>
                    
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: "SpacecraftCard",
    props: {
        spacecraft: Object
    },
}
</script>

<style scoped>
    #carouselExampleIndicators {
        width: 50%;
    }
    #carouselExampleIndicators img {
        object-fit: contain;
    }
</style>