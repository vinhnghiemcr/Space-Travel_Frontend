<template>
    <div>        
        <div class="form-floating mb-3">
            <input type="date" class="form-control" id="date-input" name="date" :value="date" @input="onChange">
            <label for="date-input">Date</label>
        </div>
        <div class="form-floating">
            <input type="text" class="form-control" id="departureAirport" name="departureAirport" :value="departureAirport" placeholder="Airport" @input="onChange" >
            <label for="departureAirport">From</label>
        </div>
        <div class="form-floating">
            <input type="text" class="form-control" id="arrivalAirport" name="arrivalAirport" :value="arrivalAirport" placeholder="Airport" @input="onChange">
            <label for="arrivalAirport">To</label>
        </div>
        <b-button class="mt-3" @click="handleClickSearch">Search</b-button>
    </div>
</template>

<script>
export default {
    name: 'DateAirportForm',
    data: () => ({
        date: null,
        departureAirport: null,
        arrivalAirport: null
    }),
    methods: {
        onChange(e){
            this[e.target.name] = e.target.value
        },
        handleClickSearch(){
            const flight = {
                date: this.date,
                departureAirport: this.departureAirport,
                arrivalAirport: this.arrivalAirport
            }
            this.$emit('handleClickSearch', 'flight', 'one way', flight )
        }
    }
}
</script>