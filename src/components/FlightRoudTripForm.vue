<template>
    <div>
        <div>
            <div class="form-floating mb-3">
                <input type="date" class="form-control" id="date-input" name="date1" :value="date1" @input="onChange">
                <label for="date-input">Date</label>
            </div>
            <div class="form-floating mb-3">
                <input type="date" class="form-control" id="date-input" name="date2" :value="date2" @input="onChange">
                <label for="date-input">Date</label>
            </div>
            <div class="form-floating">
                <input type="text" class="form-control" id="departureAirport" placeholder="Airport" name="departureAirport" :value="departureAirport"  @input="onChange">
                <label for="departureAirport">From</label>
            </div>
            <div class="form-floating">
                <input type="text" class="form-control" id="arrivalAirport" placeholder="Airport" name="arrivalAirport" :value="arrivalAirport" @input="onChange">
                <label for="arrivalAirport">To</label>
            </div>
        </div>

        
        <b-button class="mt-3" @click="handleClickSearch">Search</b-button>
    </div>
</template>

<script>
export default {
    name: 'FlightRoundTripForm',
    data: () => ({
        
            date1: null,
            date2: null,
            departureAirport: null,
            arrivalAirport: null,
        
            
        
    }),
    methods: {
        onChange(e){
            this[e.target.name] = e.target.value
        },
        handleClickSearch(){
            
            const flight1 = {
                    date: this.date1,
                    departureAirport: this.departureAirport,
                    arrivalAirport: this.arrivalAirport
                }
            const flight2 = {
                    date: this.date2,
                    departureAirport: this.arrivalAirport,
                    arrivalAirport: this.departureAirport
                }
            
            console.log(flight1, flight2, "flight from the form")
            this.$emit('handleClickSearch', 'flight', 'round trip', flight1, flight2 )
        }
    }
}
</script>