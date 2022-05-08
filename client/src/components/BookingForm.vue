<template>
    <div>
        <form @submit="onSubmit" >
            <div>
                <label for="month">Month</label>
                <input type="text" name="month" :value="month" placeholder="Enter month:" @intput="onChange" required/>
                <label for="day">Day</label>
                <input type="text" name="day" :value="day" placeholder="Enter day: " @intput="onChange" required />
                <label for="year">Year</label>
                <input type="text" name="day" :value="day" placeholder="Enter day: " @intput="onChange" required />
            </div>
            <div>
                <label for="fname">First Name:</label>
                <input type="text" name="fname" :value="fname" placeholder="Enter your first name" @intput="onChange" required />
                <label for="lname">Last Name:</label>
                <input type="text" name="lname" :value="lname" placeholder="Enter your last name" @intput="onChange" required />
                <label for="email">Last Name:</label>
                <input type="text" name="email" :value="email" placeholder="Enter your email" @intput="onChange" required />
            </div>
            <button @click="onSubmit">Search</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'BooKingForm',
    data: () => ({
        month: '',
        day: null,
        year: null,
        fname: '',
        lname: '',
        email: '',
    }),
    methods: {
        onChange(e){
            this[e.target.name] = e.target.value
        },
        onSubmit() {
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

<style >

</style>