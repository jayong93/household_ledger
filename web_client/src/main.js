import Vue from 'vue'
import App from './App.vue'
import awsconfig from "./aws-exports";
import Amplify from "aws-amplify";
import vuetify from './plugins/vuetify'
Amplify.configure(awsconfig);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
