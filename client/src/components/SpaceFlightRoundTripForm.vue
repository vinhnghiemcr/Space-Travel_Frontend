<template>
    <div>
        <div>Flight 1:
            <div class="form-floating mb-3">
                <input type="date" class="form-control" id="date-input" name="date1" :value="date1" @input="onChange">
                <label for="date-input">Date</label>
            </div>
            <div class="form-floating">
                <input type="text" class="form-control" id="departureAirport" placeholder="Airport" name="departurePlanet1" :value="departurePlanet1"  @input="onChange">
                <label for="departureAirport">From</label>
            </div>
            <div class="form-floating">
                <input type="text" class="form-control" id="arrivalAirport" placeholder="Airport" name="arrivalPlanet1" :value="arrivalPlanet1" @input="onChange">
                <label for="arrivalAirport">To</label>
            </div>
        </div>

        <div>Flight 2:
            <div class="form-floating mb-3">
                <input type="date" class="form-control" id="date-input" name="date2" :value="date2" @input="onChange">
                <label for="date-input">Date</label>
            </div>
            <div class="form-floating">
                <input type="text" class="form-control" id="departureAirport" placeholder="Airport" name="departurePlanet2" :value="departurePlanet2"  @input="onChange">
                <label for="departureAirport">From</label>
            </div>
            <div class="form-floating">
                <input type="text" class="form-control" id="arrivalAirport" placeholder="Airport" name="arrivalPlanet2" :value="arrivalPlanet2" @input="onChange">
                <label for="arrivalAirport">To</label>
            </div>           
        </div>
        <b-button class="mt-3" @click="handleClickSearch">Search</b-button>
    </div>
</template>

<script>
export default {
    name: 'SpaceFlightRoundTripForm',
    data: () => ({
        date1: null,
        date2: null,
        departurePlanet: null,
        arrivalPlanet: null
}),
    methods: {
        onChange(e){
            this[e.target.name] = e.target.value
        },
        handleClickSearch(){
            const flight1 = {
                date: this.date1,
                departurePlanet: this.departurePlanet,
                arrivalPlanet: this.arrivalPlanet,
            }
            const flight2 = {
                date: this.date1,
                departurePlanet: this.arrivalPlanet,
                arrivalPlanet: this.departurePlanet,
            }
            this.$emit('handleClickSearch', 'space flight', 'round trip', flight1, flight2 )
        }
    }
}
</script>