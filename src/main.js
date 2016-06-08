import Vue from 'vue'
import VueRouter from 'vue-router'
import Example from './components/Example_vue_template'
import Home from './components/Home'
import Contact from './components/Contact'
var VueFire = require('vuefire')
// var Firebase = require('firebase')
Vue.use(VueFire)
Vue.use(VueRouter)
Vue.use(require('vue-resource'))
var App = Vue.extend({})
var router = new VueRouter()

/* eslint-disable no-new */

router.map({
  '/Message': {
    component: Example
  },
  '/': {
    component: Home
  },
  '/contact': {
    component: Contact
  }
})

router.start(App, '#app')
