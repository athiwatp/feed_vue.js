<template>
  <!-- <img class="logo" src="/static/sellsuki.jpg"> -->
  <!-- <img class="ui fluid image" src="/static/sellsuki.jpg"> -->
  <!-- <div class="ui segment">
    <img class="ui centered medium image" src="/static/sellsuki.jpg">
</div> -->

    <p><text></text></p> 
    <br><br>
    <p><suki></suki></p>
</template>
<script>
import Suki from './suki.vue'
import Text from './text.vue'
export default {
  components: { Suki, Text },
  data () {
    return {
      msg: 'Run Together'
    }
  }
}
</script>
/* css */
<style>
</style>