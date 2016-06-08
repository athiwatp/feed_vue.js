<template>
  <br><br>
<!-- <div class="ui fluid container">
  <div class="ui cards">
    <div class="card">
      <div class="content">
        <img class="right floated mini ui image" src="/static/sellsuki.jpg">
        <div class="header">
          Elliot Fu
        </div>
        <div class="meta">
          Friends of Veronika
        </div>
        <div class="description">
          Elliot requested permission to view your contact details
        </div>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <div class="ui basic green button">Approve</div>
          <div class="ui basic red button">Decline</div>
        </div>
      </div>
    </div>
</div> -->
  <br>
  <div class="ui fluid container">
  <div v-for="tmp in data">
        <div class="ui card">
        <div class="content">
          <div class="right floated meta">{{formatdate(tmp.date)}}</div>
          <img class="ui avatar image" src="/static/{{tmp.pic}}"> {{tmp.name}}
        </div>
        <div class="image">
          <img>
        </div>
        <div class="content">
          {{tmp.message}}
          <span class="right floated">
            <i class="heart outline like icon"></i>
            {{tmp.love.length}} likes
          </span>
        </div>
        <div class="extra content">
          <div class="ui comments">
              <h3 class="ui dividing header">Comments</h3>
              <div class="comment">
                {{formatdate(tmp.date)}}
                <div class="content" v-for="comment in tmp.comment">
                  <a class="author">{{comment.name}}</a>
                  <div class="metadata">
                    <span class="date">{{formatdate(comment.date)}}</span>
                  </div>
                  <div class="text">
                  {{comment.message}}
                  </div>
                </div>
              </div>

              <form class="ui reply form">
                <div class="field">
                  <textarea v-model="tmp.newComment"></textarea>
                </div>
                <div class="ui blue labeled submit icon button" v-on:click="addcomment($index, tmp.newComment)">
                  <i class="icon edit"></i> Add Reply
                </div>
              </form>
            </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
/* global moment*/
// var data = [
//   {
//     name: 'Alejandro G. Iñárritu',
//     pic: 'sellsuki.jpg',
//     date: 1464940250515,
//     message: 'Best Director winner',
//     newComment: '',
//     love: [
//       'jamie',
//       'vardy',
//       'Leonardo',
//       'Leonardo',
//       'Leonardo'
//     ],
//     comment: [
//       {
//         name: 'Leonardo DiCaprio',
//         pic: 'sellsuki.jpg',
//         date: 1464940250515,
//         message: 'congratulation boy!!'
//       },
//       {
//         name: 'Adam McKay',
//         pic: 'sellsuki.jpg',
//         date: 1464940250515,
//         message: 'good job!!'
//       }
//     ]
//   },
//   {
//     name: 'Ennio Morricone',
//     pic: 'sellsuki.jpg',
//     date: 1464940250515,
//     message: 'Best Original Score winner',
//     newComment: '',
//     love: [
//       'jamie',
//       'vardy',
//       'Leonardo',
//       'Leonardo',
//       'Leonardo'
//     ],
//     comment: [
//       {
//         name: 'Alejandro G. Iñárritu',
//         pic: 'sellsuki.jpg',
//         date: 1464940250515,
//         message: 'excellent!!'
//       },
//       {
//         name: 'jamie vardy',
//         pic: 'sellsuki.jpg',
//         date: 1464940250515,
//         message: 'why you so good!!'
//       }
//     ]
//   }
// ]
export default {
  data () {
    return {
      msg: 'example vue',
      data: []
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
      this.data[index].newComment = ''
    },
    formatdate: function (time) {
      return moment(time).startOf('day').fromNow()
    }
  },
  ready: function () {
    this.$http({url: 'https://testresapi.firebaseio.com/data.json', method: 'GET'}).then(function (response) {
      console.log(response.data)
      this.data = response.data
    })
  }
}
</script>
<style>
.example {
  color: red;
}
</style>