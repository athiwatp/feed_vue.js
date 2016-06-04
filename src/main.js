import Vue from 'vue'
import VueRouter from 'vue-router'
import Example from './components/Example_vue_template'
Vue.use(VueRouter)

var App = Vue.extend({})

var router = new VueRouter()

/* eslint-disable no-new */

router.map({
  '/': {
    component: Example
  }
})

router.start(App, '#app')
