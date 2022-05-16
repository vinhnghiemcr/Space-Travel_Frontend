<template>
    <div class="form-container" >
        <form @submit="onSubmit" >
            <div  class="form-floating mb-3" >
                <!-- <label for="fname">First Name:</label> -->
                <input id="fname" type="text" name="fname" :value="fname" placeholder="Enter your first name" @input="onChange" required />
                <!-- <label for="lname">Last Name:</label> -->
                <input type="text" name="lname" :value="lname" placeholder="Enter your last name" @input="onChange" required />
                <!-- <label for="email">Last Name:</label> -->
                <input type="text" name="dob" :value="dob" placeholder="Enter your birthday" @input="onChange" required />
            </div>
            <b-button class="mt-3" @click="handleClickSubmit">Submit</b-button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'BookingForm',
    data: () => ({
        fname: '',
        lname: '',
        dob: '',
        
    }),
    methods: {
        onChange(e){
            this[e.target.name] = e.target.value
        },
        handleClickSubmit(e) {
            e.preventDefault()
            const passenger = {
                fname: this.fname,
                lname: this.lname,
                dob: this.dob
            }
            this.$emit('bookingTickets', passenger)
        }
    }

}
</script>

<style scoped>
    .form-container {
        margin-top: 30px;
    }
</style>
