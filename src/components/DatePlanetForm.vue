<template>
    <div>        
        <div class="form-floating mb-3">
            <input type="date" class="form-control" id="date-input" name="date" :value="date" @input="onChange">
            <label for="date-input">Date</label>
        </div>
        <div class="form-floating">
            <input type="text" class="form-control" id="departurePlanet" name="departurePlanet" :value="departurePlanet" placeholder="Airport" @input="onChange" >
            <label for="departurePlanet">From</label>
        </div>
        <div class="form-floating">
            <input type="text" class="form-control" id="arrivalPlanet" name="arrivalPlanet" :value="arrivalPlanet" placeholder="Airport" @input="onChange">
            <label for="arrivalPlanet">To</label>
        </div>
        <b-button class="mt-3" @click="handleClickSearch">Search</b-button>
    </div>
</template>

<script>
export default {
    name: 'DatePlanetForm',
    data: () => ({
        date: null,
        departurePlanet: null,
        arrivalPlanet: null
    }),
    methods: {
        onChange(e){
            this[e.target.name] = e.target.value
        },
        handleClickSearch(){
            const spaceFlight = {
                date: this.date,
                departurePlanet: this.departurePlanet,
                arrivalPlanet: this.arrivalPlanet
            }
            this.$emit('handleClickSearch', 'space flight', 'one way', spaceFlight )
        }
    }
}
</script>