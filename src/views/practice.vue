<template>
  
    <div>
        <div>
          <button @click="activeCom = 'ComA'">Com A</button>
          <button @click="activeCom = 'ComB'">Com B</button>
          <button @click="activeCom = 'ComC'">Com C</button>
        </div>
        <div>
          <keep-alive>
            <component :is="activeCom" />
          </keep-alive>
          <!-- <ComA v-if="activeCom === 'ComA'" />
          <ComB v-if="activeCom === 'ComB'" />>
          <ComC v-if="activeCom === 'ComC'" /> -->
        </div>
      </div> 
    
    <FormData />
    <div>
        <!--<img alt="Vue logo" src="./assets/logo.png">-->
        <div>
          {{ greet }} {{ userRole==='admin' ? 'You are Admin!' : 'You are ' + userRole + '!' }} 
          <div v-bind:class="userRole==='admin' ? 'green' : 'red'">
            <span v-html="firstname + ' ' + lastname"></span>
          </div>
        </div>
        <h2 v-pre>{{ userRole }}</h2>
        <button @click="userRole = 'admin'">submit</button>
        <h2 v-if="num === 0">The number is zero</h2>
        <h2 v-else-if="num < 0">The number is nagetive</h2>
        <h2 v-else-if="num > 0">The number is positive</h2>
        <h2 v-else>Not a number</h2>
  
      <div v-if="userRole!=='admin' && !display">
          <HelloWorld msg="Welcome to Your Vue.js App" nametext="Abbas" />
      </div>
      <div v-show="userRole!=='admin' && !display">
          <HelloWorld msg="Welcome to Your Vue.js App" nametext="Abbas" />
      </div>
  
      <h2 v-for="(name,index) in fullNames" :key="name">{{index}} {{ name.first }} {{ name.last }}</h2>
  
      <template v-for="(name,index) in names" :key="name">
        <h2 v-if="name === 'Abbas' || name === 'Haris' || name === 'Shayaan'">{{index}} {{ name }}</h2>
      </template>
      {{ (3*3) + 5 + (4*4) }}
      {{ add() }}
      {{ mulitple(50) }}
  
      {{ userRole }}
  
      <button @click="changeRole">Change Role</button>
   
    </div>
  </template>
  
  <script>
  import HelloWorld from '../components/HelloWorld.vue'
  import FormData from '../components/FormData.vue'
  import ComA from '../components/ComA.vue'
  import ComB from '../components/ComB.vue'
  import ComC from '../components/ComC.vue'
  
  export default {
    name: 'PracticeView',
    data(){
      return {
        greet: "Hello!",
        firstname: "<b>Abbas</b>",
        lastname: "Tahir",
        userRole: "Volunter",
        num: 0,
        display: false,
        names: ["Abbas", "Haris", "Shayaan", "Waseem", "Salman"],
        fullNames: [
          {first: "Abbas", last:"Tahir"},
          {first: "Haris", last:"Abbas"},
          {first: "Shayaan", last:"Abbas"},
        ],
        baseMultiplier: 5,
        activeCom: 'ComA',
      }
    },
    methods: {
      add(){
        return (13*3) + 55 + (45*4)
      },
      mulitple(multi){
        return multi * this.baseMultiplier
      },
      changeRole(){
        this.userRole = "admin"
        //console.log("Event", event);
        
      }
    },
    components: {
      HelloWorld,
      FormData,
      ComA,
      ComB,
      ComC
    }
  }
  </script>
  
  <style>
  
  .green{color: green;}
  .red{color: red;}
  </style>
  