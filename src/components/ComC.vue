<template>
    <div>
        Component C content
    </div>
    <input type="text" v-model="name" />
</template>

<script>
    export default {
        name: 'ComC',
        data(){
            return {
                name: ''
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>