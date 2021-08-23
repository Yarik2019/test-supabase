<template>
  <HelloWorld :set-user="setUser"  />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },

  data(){
    return{
      user: null
    }
  },
  methods:{
   setUser(newUser){
     this.user = newUser;
   }
  }
}
</script>

<style>
@import "./assets/style/style.scss";
h3{
  color: red;
}
</style>
