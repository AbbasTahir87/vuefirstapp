<template>
    <section class="text-box">
        <div class="content-inner">
            <slot></slot>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'IntroTextBlock',
        // "vue/no-irregular-whitespace": ["error", {
        //     "skipStrings": true,
        //     "skipComments": false,
        //     "skipRegExps": false,
        //     "skipTemplates": false,
        //     "skipHTMLAttributeValues": false,
        //     "skipHTMLTextContents": false
        // }]
    }
</script>

<style lang="scss" scoped>

</style>