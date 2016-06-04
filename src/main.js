import Vue from 'vue'
import VueRouter from 'vue-router'
import Example from './components/Example_vue_template'
import Home from './components/Home'
Vue.use(VueRouter)

var App = Vue.extend({})

var router = new VueRouter()

/* eslint-disable no-new */

router.map({
  '/Message': {
    component: Example
  },
  '/': {
    component: Home
  }
})

router.start(App, '#app')
