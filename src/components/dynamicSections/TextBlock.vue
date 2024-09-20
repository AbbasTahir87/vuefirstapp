<template>
    <article class="inner">
        <div v-html="heading"></div>
        <div class="block-text margin-b">
            <div v-html="description"></div> 
        </div>
    </article>
</template>

<script>
    export default {
        name: 'TextBlock',
        props: { 
            heading: String,
            description: String, 
        }
    }
</script>

<style lang="scss" scoped>

</style>