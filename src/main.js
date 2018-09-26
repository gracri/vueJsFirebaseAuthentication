// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  //add your apiKey here
  apiKey: "",
  authDomain: "fir-authtutorial-d21cc.firebaseapp.com",
  databaseURL: "https://fir-authtutorial-d21cc.firebaseio.com",
  projectId: "fir-authtutorial-d21cc",
  storageBucket: "fir-authtutorial-d21cc.appspot.com",
  messagingSenderId: "307702301677"
};
firebase.initializeApp(config);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
