import Vue from 'vue'
import App from './App.vue'

// import editer from 'gxds-editer';
// Vue.use(editer, {});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
