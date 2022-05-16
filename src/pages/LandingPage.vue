<template>
    <div>
        <img class="logo" src="../assets/infinity.png" alt="infinitude imanage">
        <h4>Book your domestic, international, or interplanetary trip today!</h4>
        <b-button class="book-now" @click="bookNow">Book Now!</b-button>
        <div class='destination-images'>
            <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F06%2F29%2Fkey-west-beach-florida-BEACHWKNDS0620.jpg&q=60" alt="" />
            <img src="https://i0.wp.com/sitn.hms.harvard.edu/wp-content/uploads/2020/07/Mars_zichtbaar_vanaf_de_alpe_du_hues-scaled.jpg?resize=1920%2C768&ssl=1" alt="planet" />
            <img src="https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900" alt="" />
        </div>
    </div>
</template>

<script>
export default {
    name: "LandingPage",
    methods: {
        bookNow() {
            this.$router.push('/searching')
        }
    },
}
</script>

<style scoped>
.book-now {
    background-color: white;
    color: grey;
    margin: 30px 0;

}

.book-now:hover {
    background-color: green;
    color: white;
    animation: zoom .1s linear forwards;
}

@keyframes zoom {
    0% {
        transform: scale(1.0)
    }

    100% {
        transform: scale(1.1)
    }
}

.logo {
    height: 50vh;
}
.destination-images {
    display: flex;
    -webkit-overlfow-scrolling: touch;
    overflow-x: auto;
    height: 20vh;
    width: auto;
    gap: 10px;
    justify-content: center;
}
    .destination-images img {
       border-radius: 5px;
    }
</style>