<template>
    <div>
        <form @submit="onSubmit" >
            <div>
                <label for="fname">First Name:</label>
                <input type="text" name="fname" :value="fname" placeholder="Enter your first name" @input="onChange" required />
                <label for="lname">Last Name:</label>
                <input type="text" name="lname" :value="lname" placeholder="Enter your last name" @input="onChange" required />
                <label for="email">Last Name:</label>
                <input type="text" name="email" :value="email" placeholder="Enter your email" @input="onChange" required />
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
        email: '',
        
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
                email: this.email
            }
            this.$emit('getPassegerInfo', passenger)
        }
    }

}
</script>
