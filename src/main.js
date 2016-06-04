import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from './components/header'
Vue.use(VueRouter)

var App = Vue.extend({})

var router = new VueRouter()

/* eslint-disable no-new */

router.map({
  '/': {
    component: Header
  }
})

router.start(App, '#app')
