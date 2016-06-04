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
    <p></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'example vue'
    }
  },
  methods: {
    addcomment: function (index, input) {
      var str = {
        name: this.msg,
        pic: 'ab.png',
        date: {type: Date, defualt: Date.now},
        message: input
      }
      this.data[index].comment.push(str)
      data[index].newComment = ''
    },
    formatdate: function (time) {
      return moment(time).startOf('day').fromNow()
    }
  }
}
</script>
/* css */
<style>
</style>