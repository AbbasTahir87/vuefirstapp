<template>
    <section class="carousel-box">
        <article class="inner">
            <ul>

                
                <slot></slot>

                <!-- <li> 
                    <slot name="main-image"></slot>
                    <article class="slider-text">
                        <div class="content-inner">
                            <div class="slider-text-inner">
                                <slot name="main-heading"></slot>
                                <slot name="main-link"></slot>
                            </div>
                        </div>
                    </article>
                </li> -->


                    <!-- <figure class="bg web" :style="{ backgroundImage: `url(${require('@/' + Image + '.webp')})` }"></figure>
                    <figure class="bg mobile" :style="{ backgroundImage: `url(${require('@/' + Image + '.webp')})` }"></figure> -->
                 
                <!-- <li>    
                    <figure class="bg web" :style="{ backgroundImage: `url(${image})` }"></figure>
                    <figure class="bg mobile" :style="{ backgroundImage: `url(${imageMobile})` }"></figure>

                    <article class="slider-text">
                        <div class="content-inner">
                            <div class="slider-text-inner">
                                <h1 class="clone coral" v-html="headingText"></h1>
                                <p><router-link class="learn-m" :to="`${'/' + linkUrl}`">{{linkText}}</router-link></p>
                            </div>
                        </div>
                    </article>
                </li> -->
            </ul>
        </article>
    </section>
</template>

<script>
    export default {
        name: 'TopHeader',
        // props: {
        //     image: String,
        //     imageMobile: String,
        //     headingText: String,
        //     linkText: String,
        //     linkUrl: String
        // }
    }
</script>

<style lang="scss" scoped>

</style>