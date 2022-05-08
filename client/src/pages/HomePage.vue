<template>
    <div>
        <BookingForm @getPassegerInfo="getPassegerInfo" />
    </div>
</template>

<script>
import BookingForm from '../components/BookingForm.vue'
export default {
    name: 'HomePage',
    data: () => ({
        passenger = null
    }),
    componets: {
        BookingForm
    },
    methods: {
        getPassegerInfo(passenger) {
            this.passenger = passenger
        }
    }

}
</script>