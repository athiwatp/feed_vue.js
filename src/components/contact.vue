<template>
    Api test https://corsbackend.herokuapp.com
    <br>
    <div v-for="(key, show) in fire">
        <div v-on:click="del(key)">
        {{show.password}} // {{show.username}} 
        </div>
    </div>
    username: <input type="text" v-model="username">
    password: <input type="text" v-model="password">
    <button type="button" v-on:click="add(username, password)">sendData</button>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Run Together',
      tmp: [],
      fire: [],
      username: '',
      password: ''
    }
  },
  ready: function () {
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
      this.fire = {...this.fire, data}
      this.$http({url: 'https://testresapi.firebaseio.com/data.json', data, method: 'POST'}).then(function (response) {
        console.log(response)
      })
    },
    del: function (key) {
      this.$http({url: 'https://testresapi.firebaseio.com/data/' + key + '.json', method: 'DELETE'}).then(function (response) {
        console.log(response)
        this.get()
      })
    },
    get: function () {
      this.$http({url: 'https://testresapi.firebaseio.com/data.json', method: 'GET'}).then(function (response) {
        console.log(response.data)
        this.fire = response.data
      })
    }
  }
}
</script>
/* css */
<style>
</style>