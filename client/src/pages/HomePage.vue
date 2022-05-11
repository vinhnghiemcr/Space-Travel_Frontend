<template>
    <div>Hello
        <BookingForm @getPassegerInfo="getPassegerInfo" />
    </div>
</template>

<script>
import BookingForm from '../components/BookingForm.vue'
export default {
    name: 'HomePage',
    data: () => ({
        passenger : null
    }),
    components: {
        BookingForm
    },
    methods: {
        getPassegerInfo(passenger) {
            this.passenger = passenger
        }
    }

}
</script>