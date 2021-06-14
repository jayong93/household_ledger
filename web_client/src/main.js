import Vue from 'vue'
import App from './App.vue'
import awsconfig from "./aws-exports";
import Amplify from "aws-amplify";
Amplify.configure(awsconfig);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
