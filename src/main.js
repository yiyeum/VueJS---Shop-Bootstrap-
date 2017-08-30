import Vue from 'vue'
import Navigation from './page_components/Navigation.vue'
import Container from './page_components/Container.vue'
import Footer from './page_components/Footer.vue'

new Vue({
  el: '#app',
  components:{
      'kt-nav' : Navigation,
      'kt-container' : Container,
      'kt-footer' : Footer
  }
})
