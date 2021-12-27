<template>
<div>
    <h3>{{greet()}} {{name}}</h3> 
    
    <div v-text="title"></div>
    <div v-html="link"></div> 
    <a v-bind:href="bindLink">part2</a>
    <h3 class="underline">Underlined text</h3>
    <h2 v-bind:class="status">status</h2>
    <div>
      <h2>{{count}}</h2>
      <button v-on:click="add(1)">increase</button>
      <button v-on:click="subtract(1)">decrease</button>
      <button v-on:click="add(5)">increase 5</button>
      <button v-on:click="subtract(5)">decrease 5</button><br><br>
      <button style="align:center" v-on:click="reset">Reset</button>

      <h2 v-if="num==0">the number is zero </h2>
      <h2 v-else>Number is not zero</h2>
      <h2 v-show="showElement">something</h2>
    </div>

    <div>
      <h4 v-for="(items,index) in books" :key="items">{{index}}:{{items.title}}</h4>
    </div>

    <div>
      <h1>form handling</h1>
      <div>
        <pre>
          {{JSON.stringify(formValues,null)}}
        </pre>
      </div>
      <form >
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" v-model="formValues.name">
        </div>
        <div>
          <label for="profile">Profile Summary</label>
          <textarea name="profile" id="profile" v-model="formValues.profile"></textarea>
        </div>
        <div>
          <label for="country">Country</label>
          <select id="country" v-model="formValues.country">
            <option value="">Select a country</option>
            <option value="india">India</option>
            <option value="vietnam">Vietnam</option>
            <option value="singapore">Singapore</option>
          </select>
        </div>
        <div>
          <label for="job-location">Job location</label>
          <select id="job-location" v-model="formValues.jobLocation" multiple>
            <option value="india">India</option>
            <option value="vietnam">Vietnam</option>
            <option value="singapore">Singapore</option>
          </select>
        </div>
        <div>
          <input type="checkbox" id="remoteWork" v-model="formValues.remoteWork" true-value="yes" false-value="no"/>
          <label for="remoteWork">Open to remote work?</label>
        </div>
        <div>
          <label >skillsets</label>
          <input type="checkbox" id="html" value="html" v-model="formValues.skillsets"/>
          <label for="html">HTML</label>
          <input type="checkbox" id="css" value="css"  v-model="formValues.skillsets"/>
          <label for="css" >CSS</label>
          <input type="checkbox" id="javascript" value="javascript"  v-model="formValues.skillsets"/>
          <label for="javascript">javascript</label>
        </div>
         <button v-on:click="resetChoice">Clear choice</button>
      </form>
    </div>
</div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      name:"irfan",
      title:"Spiderman",
      link:'<a href="https://www.google.com/", target="_blank">google</a>',
      bindLink:"https://www.google.com/",
      count:0,
      num:0,
      showElement:false,
      books:[
        {title:"ahmad maslan goreng nasi",author:"ahmad maslan",year:"2010"},
        {title:"najib buat hal",author:"bini najib",year:"2010"},
        {title:"rosmah beli handbag",author:"rosmah mansor",year:"2010"},
        {title:"banjir malaysia",author:"malaysia",year:"2010"},
      ],
      formValues:{
        name:"",
        profile:"",
        Country:"",
        jobLocation:[],
        remoteWork:"no",
        skillsets:[],
        }
    };
  },
  methods:{
    greet:function(){
      return "Hello"
    },
    add:function(increment){
      this.count+=increment;
    },
    subtract:function(decrement){
      this.count-=decrement;
    },
    reset:function(){
      this.count = 0
      },
    resetChoice:function(){
      this.skillsets.length=0
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}
input + label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}
input[type='text'],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  }
</style>
