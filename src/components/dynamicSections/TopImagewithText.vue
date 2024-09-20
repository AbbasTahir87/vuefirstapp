<template>
    <li>
        <figure class="bg web" :style="{ backgroundImage: `url(${image})` }"></figure>
        <figure class="bg mobile" :style="{ backgroundImage: `url(${imageMobile})` }"></figure>
        <article class="slider-text">
            <div class="content-inner">
                <div class="slider-text-inner">
                    <h1 class="clone coral" v-html="headingText"></h1>
                    <p>
                        <router-link class="learn-m" :to="`${'/' + linkUrl}`">{{linkText}}</router-link>
                    </p>
                </div>
            </div>
        </article>
    </li>
</template>

<script>
    export default {
        name: 'TopImagewithText',
        props: {
            image: String,
            imageMobile: String,
            headingText: String,
            linkText: String,
            linkUrl: String
        }
    }
</script>

<style lang="scss" scoped>

</style>