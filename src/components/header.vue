<template>
    <div class="ui pointing menu">
    <a class="active item">
      Home
    </a>
    <a class="item">
      Messages
    </a>
    <a class="item">
      Friends
    </a>
    <div class="right menu">
      <div class="item">
        <div class="ui transparent icon input">
          <input type="text" placeholder="Search...">
          <i class="search link icon"></i>
        </div>
      </div>
    </div>
  </div>
  <div class="ui segment">
    <p><example></example></p>
  </div>
</template>
<script>
import Example from './Example_vue_template.vue'
export default {
  components: { Example },
  data () {
    return {
      msg: 'example vue'
    }
  }
}
</script>
/* css */
<style>
</style>