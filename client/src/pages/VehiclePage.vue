<template>
    <div></div>
</template>

<script>
export default {
    name: "VehicalPage",
    data: () => ({
        id: null,
        type: ''
    }),
    mounted(){
        this.id = this.$route.params.id
        this.type = this.$route.params.type
    }
}
</script>