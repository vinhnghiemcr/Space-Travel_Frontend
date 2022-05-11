<template>
    <div>
        <b-overlay :show="show" rounded="sm">
            <div :aria-hidden="show ? 'true' : null">
                <b-tabs content-class="mt-3">
                    <b-tab title="Space Flight" active>
                        <b-tabs content-class="mt-3">
                            <b-tab title="Round-Trip" active>
                                <BookingForm @getPassegerInfo="getPassegerInfo" />
                            </b-tab>
                            <b-tab title="One-Way"><p>I'm the second tab</p></b-tab>
                    </b-tabs>
                    </b-tab>
                    <b-tab title="Flight">
                        <b-tabs content-class="mt-3">
                            <b-tab title="Round-Trip" active>
                                <BookingForm @getPassegerInfo="getPassegerInfo" />
                            </b-tab>
                            <b-tab title="One-Way"><p>I'm the second tab</p></b-tab>
                            
                        </b-tabs>
                    </b-tab>
                    
                </b-tabs>
            
            </div>
            <b-button class="mt-3" @click="handleClick">Search</b-button>
        </b-overlay>
    </div>
</template>

<script>
import BookingForm from '../components/BookingForm.vue'
export default {
    name: 'HomePage',
    data: () => ({
        passenger : null,
        show: false
    }),
    components: {
        BookingForm
    },
    methods: {
        getPassegerInfo(passenger) {
            this.passenger = passenger
        },
        handleClick(){
            this.show = true
            setTimeout(this.toggleShow, 3000)
        },
        toggleShow() {
            this.show = !this.show
        }
    }

}
</script>