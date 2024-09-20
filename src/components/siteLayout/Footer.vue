<template>
    <footer>
        <nav>
            <div class="footer-inner">
                <ul>
                    <li> 
                        <!-- <figure class="logo" :style="{'background-image': 'url(' + require('@/assets/images/logo-footer.svg') + ')'}"></figure> -->
                        
                        <figure class="logo" :style="{ backgroundImage: `url(${require('@/assets/images/logo-footer.svg')})` }"></figure>

                    </li>
                    <li>
                        <router-link to="/about-us">ABOUT US</router-link>
                        <router-link to="/what-we-teach">WHAT WE TEACH</router-link>
                        <router-link to="/our-school-day">OUR SCHOOL DAY</router-link>
                        <router-link to="/admission-fees">ADMISSIONS & FEES</router-link>
                        <router-link to="/contact-us">CONTACT US</router-link>
                    </li>
                    <li>
                        <router-link to="/privacy-policy">PRIVACY POLICY</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <article class="bottom-box">
            <div class="footer-inner">
                <div class="left">
                    <label>© 2023 New Horizon Islamic School. All rights reserved.</label>
                </div>
            </div>
        </article>
    </footer>
</template>

<script> 
    export default {
        name: 'FooterComponent'
    }
</script>

<style scoped>

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
} 

nav a.router-link-exact-active {
  color: #42b983;
}
  */
</style>