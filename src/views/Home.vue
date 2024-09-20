<template>
<!-- <TopHeader :image="image" :imageMobile="imageMobile" :headingText="headingText" :linkText="linkText" :linkUrl="linkUrl" /> -->

<!-- <TopHeader v-if="image !== ''">

        <template v-slot:main-image>
          <template>
            <figure class="bg web" :style="{ backgroundImage: `url(${image})` }"></figure>
            <figure class="bg mobile" :style="{ backgroundImage: `url(${imageMobile})` }"></figure>
            </template>
        </template>

        <template v-slot:main-heading>
          <h1 class="clone coral" v-html="headingText"></h1>
        </template>

        <template v-slot:main-link>
          <p><router-link class="learn-m" :to="`${'/' + linkUrl}`">{{linkText}}</router-link></p>
        </template>

    </TopHeader> -->

<TopHeader v-if="image !== ''">
    <template v-for="i in TopHeaderData" :key="i.key">
        <TopImagewithText :image="i.image" :imageMobile="i.imageMobile" :headingText="i.headingText" :linkText="i.linkText" :linkUrl="i.linkUrl" />
        <!-- <li>
            <figure class="bg web" :style="{ backgroundImage: `url(${i.image})` }"></figure>
            <figure class="bg mobile" :style="{ backgroundImage: `url(${i.imageMobile})` }"></figure>
            <article class="slider-text">
                <div class="content-inner">
                    <div class="slider-text-inner">
                        <h1 class="clone coral" v-html="i.headingText"></h1>
                        <p>
                            <router-link class="learn-m" :to="`${'/' + i.linkUrl}`">{{i.linkText}}</router-link>
                        </p>
                    </div>
                </div>
            </article>
        </li> -->
    </template>
</TopHeader>

<IntroTextBlock>
    <template v-for="i in TextBlockData" :key="i.key">
        <TextBlock :heading="i.heading" :description="i.description" />
    </template>
</IntroTextBlock>

<div class="hello">
    <h1>Home View</h1>
    <p>
        For a guide and recipes on how to configure / customize this project,<br>
        check out the
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>

</div>
</template>

  
<script>
import TopHeader from '@/components/TopHeader.vue';
import TopImagewithText from '@/components/dynamicSections/TopImagewithText.vue';

import IntroTextBlock from '@/components/IntroTextBlock.vue';
import TextBlock from '@/components/dynamicSections/TextBlock.vue';

export default {
    name: 'HomeView',
    data() {
        return {

            TopHeaderData: [{
                key: '1',
                //imgSrc: 'hands-up-hero-nhis.webp',
                image: require('@/assets/images/hands-up-hero-nhis.webp'),
                imageMobile: require('@/assets/images/hands-up-hero-nhis-m.webp'),
                headingText: 'SATURDAY ISLAMIC<br/> SCHOOL IN NEWBURY PARK',
                linkText: 'LEARN MORE',
                linkUrl: 'what-we-teach'
            }],
            
            TextBlockData: [{
                key: '1', 
                heading: '<h2>OUR AIMS</h2>',
                description: '<p>To provide your child with a secure framework in which they can understand and learn to further develop their love for Islam.</p><p>To develop a life-long love in your child’s heart for Allah (SWT).</p><p>To aid your child in understanding Islam according to the teachings of Qur’an and Sunnah, in a memorable way.</p><p>To build the child’s character through the moral teachings of Islam.</p><p>To build their self-esteem, respect for others, and encourage them to be confident regarding their beliefs in a Western society</p><p>To develop strong believers and representatives of Islam</p>',
            },{
                key: '2', 
                heading: '<h2>OUR AIMS 2</h2>',
                description: '<p>To develop strong believers and representatives of Islam</p>',
            }]
        }
    },
    components: {
        TopHeader,
        IntroTextBlock,
        TopImagewithText,
        TextBlock
    }
    // props: {
    //   msg: String,
    //   nametext: String
    // }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  
<style scoped>
</style>
