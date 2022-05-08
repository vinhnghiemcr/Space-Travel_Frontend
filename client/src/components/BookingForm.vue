<template>
    <div>
        <form >
            <div>
                <label for="month">Month</label>
                <input type="text" name="month" :value="month" placeholder="Enter month:" />
                <label for="day">Day</label>
                <input type="text" name="day" :value="day" placeholder="Enter day: "/>
                <label for="year">Year</label>
                <input type="text" name="day" :value="day" placeholder="Enter day: "/>
            </div>
            <div>
            </div>
                <label for="fname">First Name:</label>
                <input type="text" name="fname" :value="fname" placeholder="Enter your first name" />
                <label for="lname">Last Name:</label>
                <input type="text" name="lname" :value="lname" placeholder="Enter your last name" />
                <label for="email">Last Name:</label>
                <input type="text" name="email" :value="email" placeholder="Enter your email" />
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
    })
}
</script>

<style >

</style>