<template>
    <div>
        <pre>
            {{ JSON.stringify(formData, null, 2)}}
        </pre>
    </div>
    <!-- 
        for subnmit form on enter press
        @keyup.enter="submitForm" 
    -->
    <form @submit.prevent="submitForm">
        <div class="form">
            <label for="name">Name</label>
            <input type="text" id="name" v-model.trim.lazy="formData.name" />
            {{ formData.name }}
        </div>
        <div class="form">
            <label for="profile">Profile summery</label>
            <textarea type="text" id="profile" v-model.trim="formData.profileSummery"></textarea>
            {{ formData.profileSummery }}
        </div>
        <div class="form">
            <label for="country">Country</label>
            <select id="country" v-model="formData.country">
                <option value="">Select a country</option>
                <option value="pakistan">Pakistan</option>
                <option value="india">India</option>
                <option value="bangladesh">Bangladesh</option>
            </select>
            {{ formData.country }}
        </div>
        <div class="form">
            <label for="jobLocation">Job location</label>
            <select v-bind:style="{height:'75px'}" id="jobLocation" multiple v-model="formData.jobLocation">
                <option value="">Select a country</option>
                <option value="pakistan">Pakistan</option>
                <option value="india">India</option>
                <option value="bangladesh">Bangladesh</option>
            </select>
            <!-- {{ formData.jobLocation }} -->
        </div>
        <div class="form">
            <input :style="{width: 'auto'}" type="checkbox" id="remote-work"
             v-model="formData.remoteWork"
             true-value="yes"
             false-value="no" />
            <label for="remote-work" :style="{width: 'auto'}">Remote work</label>
        </div>
        <div class="form">
            <label>Skill set</label>
            <input :style="{width: 'auto'}" type="checkbox" id="html"
             value="html" v-model="formData.skillSet" />
            <label for="html" :style="{width: 'auto'}">HTML</label>
            
            <input :style="{width: 'auto'}" type="checkbox" id="css"
             value="css" v-model="formData.skillSet" />
            <label for="css" :style="{width: 'auto'}">CSS</label>
            
            <input :style="{width: 'auto'}" type="checkbox" id="javascript"
             value="javascript" v-model="formData.skillSet" />
            <label for="javascript" :style="{width: 'auto'}">JAVASCRIPT</label>
        </div>
        <div class="form">
            <input :style="{width: 'auto'}" type="radio" id="0-2" value="0-2"
             v-model="formData.yearOfexperience" />
            <label for="0-2" :style="{width: 'auto'}">0-2</label>

            
            <input :style="{width: 'auto'}" type="radio" id="3-5" value="3-5"
             v-model="formData.yearOfexperience" />
            <label for="3-5" :style="{width: 'auto'}">3-5</label>
            
            <input :style="{width: 'auto'}" type="radio" id="5-10" value="5-10"
             v-model="formData.yearOfexperience" />
            <label for="5-10" :style="{width: 'auto'}">5-10</label>
            
            <input :style="{width: 'auto'}" type="radio" id="10+" value="10+"
             v-model="formData.yearOfexperience" />
            <label for="10+" :style="{width: 'auto'}">10+</label>
            
        </div>
        
        <div class="form">
            <label for="age">Age</label>
            <input type="number" id="age" v-model.number="formData.age" />
            {{ formData.profileSummery }}
        </div>

        <div>
            <button>Submit</button>
        </div>
    </form>
  </template>
  
  <script>
  export default {
    name: 'FormData',
    data() {
        return {
            formData: {
                name: '',
                profileSummery: '',
                country: '',
                jobLocation: [],
                remoteWork: '',
                skillSet: [],
                yearOfexperience: "",
                age: null,
            }
        }
    },
    methods: {
        submitForm(){
            //submitForm(event){
            //event.preventDefault();
            console.log("Form Data", this.formData);
                    
        }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  div{width: 300px;float: left;clear: left;}
  label{font-size: 14px;width: 100%;float: left;text-align: left;}
  input,textarea,select{float: left;}
  input[type="text"],textarea,select{width: 300px;height: 25px;}
  textarea{height: 65px;}
  </style>