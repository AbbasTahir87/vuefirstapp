<template>
    
    <TopHeader v-if="image !== ''">
        <template v-for="i in TopHeaderData" :key="i.key">
            <TopImagewithText :image="i.image" :imageMobile="i.imageMobile" :headingText="i.headingText" :linkText="i.linkText" :linkUrl="i.linkUrl" />
        </template>
    </TopHeader>
    
    <IntroTextBlock></IntroTextBlock>
    
    <div class="hello">
        <h1>About View</h1>
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
    
    export default {
        name: 'AboutView',
        data() {
            return {
    
                TopHeaderData: [{
                    key: '1',
                    //imgSrc: 'hands-up-hero-nhis.webp',
                    image: require('@/assets/images/about-img.webp'),
                    imageMobile: require('@/assets/images/about-img-m.webp'),
                    headingText: 'ABOUT US',
                    linkText: '',
                    linkUrl: ''
                }]
            }
        },
        components: {
            TopHeader,
            IntroTextBlock,
            TopImagewithText
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
    