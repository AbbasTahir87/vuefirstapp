<template>
    <Header></Header>
    <main>
      <router-view/>
    </main>
    <Footer></Footer>
</template>

<script>
import Header from '../src/components/siteLayout/Header.vue'
import Footer from '../src/components/siteLayout/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
