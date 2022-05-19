import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './components/HomePage.vue'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '*', redirect: '/' }
  ]
});
