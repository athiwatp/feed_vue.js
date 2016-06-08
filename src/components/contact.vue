<template>
    Api test https://corsbackend.herokuapp.com
    <!-- <div v-for="show in tmp">
    {{show.name}} : {{show.tel}}
    </div> -->
    <br>
    <div v-for="show in fire">
      {{show.name}}
    </div>
    
    Username : <input type="text" v-model="username"> 
    Password : <input type="text" v-model="password">
    <button type="button" v-on:click="add(username, password)">send Firebase</button>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Run Together',
      tmp: [],
      fire: []
    }
  },
  ready: function () {
    this.$http({url: 'https://corsbackend.herokuapp.com', method: 'GET'}).then(function (response) {
      console.log(response.data['contacts'])
      this.tmp = response.data['contacts']
    })
    this.$http({url: 'https://testresapi.firebaseio.com/data.json', method: 'GET'}).then(function (response) {
      console.log(response.data)
      this.fire = response.data
    })
  },
  methods: {
    add: function (user, pass) {
      var data = {
        username: user,
        password: pass
      }
      this.$http({url: 'https://testresapi.firebaseio.com/data.json', data, method: 'POST'}).then(function (response) {
        console.log(response)
      })
    }
  }
}
</script>
/* css */
<style>
</style>