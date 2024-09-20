<template>
    <header>
        <div class="header">
            <router-link class="logo ir" to="/" title="New Horizon Islamic School">New Horizon Islamic School</router-link>
            <a class="menu ir" href="javascript:;">Menu</a>
            <nav>
                <ul>
                    <li>
                        <router-link to="/about-us">ABOUT US</router-link>
                    </li>
                    <li>
                        <router-link to="/what-we-teach">WHAT WE TEACH</router-link>
                    </li>
                    <li>
                        <router-link to="/our-school-day">OUR SCHOOL DAY</router-link>
                    </li>
                    <li>
                        <router-link to="/admission-fees">ADMISSIONS & FEES</router-link>
                    </li>
                    <li>
                        <router-link to="/contct-us">CONTACT US</router-link>
                    </li>
                    <!-- <li>
                        <router-link to="/practice">Practice</router-link>
                    </li> -->
                </ul>
            </nav>
        </div>
    </header>
    <!-- <div>
        <h2>Header View</h2>
        
    <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/practice">Practice</router-link>
        </nav>
    </div> -->
</template>

<script>
    export default {
        name: 'HeaderComponent',
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