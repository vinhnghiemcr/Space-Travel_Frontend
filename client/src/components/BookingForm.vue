<template>
    <div>
        <form @submit="onSubmit" >
            <div>
                <label for="date">Date: </label>
                <input type="date" name="date" :value="date" placeholder="Choose a date" @input="onChange" required />
            </div>
            <div>
                <label for="fname">First Name:</label>
                <input type="text" name="fname" :value="fname" placeholder="Enter your first name" @input="onChange" required />
                <label for="lname">Last Name:</label>
                <input type="text" name="lname" :value="lname" placeholder="Enter your last name" @input="onChange" required />
                <label for="email">Last Name:</label>
                <input type="text" name="email" :value="email" placeholder="Enter your email" @input="onChange" required />
            </div>
            <button @click="onSubmit">Search</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'BookingForm',
    data: () => ({
        date : null,
        fname: '',
        lname: '',
        email: ''
    }),
    methods: {
        onChange(e){
            this[e.target.name] = e.target.value
        },
        onSubmit(e) {
            e.preventDefault()
            const passenger = {
                month: this.month,
                day: this.day,
                year: this.year,
                fname: this.fname,
                lname: this.lname,
                email: this.email
            }
            this.$emit('getPassegerInfo', passenger)
        }
    }

}
</script>
