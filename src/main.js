import Vue from 'vue'
import Navigation from './page_components/Navigation.vue'
import Container from './page_components/Container.vue'
import Footer from './page_components/Footer.vue'
import Router from 'vue-router'
import {routers} from './routers'
Vue.use(Router);

const router = new Router({
    routers
});

new Vue({
    router,
  el: '#app',
  components:{
      'kt-nav' : Navigation,
      'kt-container' : Container,
      'kt-footer' : Footer
  }
})
