import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.authRequired)
  if (requireAuth && !currentUser) next('/')
  else if (!requireAuth && currentUser) {
    store.commit('setUser', { user: currentUser })
    next('/dashboard')
  } else if (currentUser) {
    store.commit('setUser', { user: currentUser })
    next()
  } else {
    next()
  }
})

var firebaseConfig = {
  apiKey: 'AIzaSyDLnhlwQ2lA2246I6alj2GM1kbrYIIB_mo',
  authDomain: 'trapscan-app.firebaseapp.com',
  projectId: 'trapscan-app',
  storageBucket: 'trapscan-app.appspot.com',
  messagingSenderId: '967559821858',
  appId: '1:967559821858:web:461e4d27f4a1f80e62a87b',
  measurementId: 'G-TW81PQ39B9'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

store.dispatch('auth')

let app = ''
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
