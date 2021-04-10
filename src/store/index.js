import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import router from '../router'
// import router from '../router/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    error: null,
    email: null
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    setError (state, error) {
      state.error = error
    },
    setEmail (state, email) {
      state.email = email
    }
  },
  actions: {
    signIn ({ commit }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(data => {
          router.push('/dashboard')
        })
        .catch(error => {
          commit('setError', error)
        })
    },
    signOut ({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(data => {
          router.push('/')
        })
        .catch(error => {
          alert(error)
          commit('setError', error)
        })
    },
    startMagicSignIn ({ commit }, { email }) {
      commit('setEmail', email)
    },
    finishMagicSignIn ({ commit }, { user }) {
      // router.push('/dashboard')
      commit('setUser', user)
    },
    setError ({ commit }, { error }) {
      commit('setError', error)
    }
  },
  modules: {
  },
  getters: {
    getUser (state) {
      return state.user
    },
    isUserAuth (state) {
      return !!state.user
    },
    getError (state) {
      return state.error
    },
    signInEmail (state) {
      return state.email
    }
  }
})
