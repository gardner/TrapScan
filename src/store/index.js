import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import router from '../router/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    error: null
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    setError (state, error) {
      state.error = error
    }
  },
  actions: {
    auth ({ commit }) {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          commit('setUser', user)
          router.push('/dashboard')
        } else {
          commit('setUser', null)
          router.push('/')
        }
      })
    },
    signIn ({ commit }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => {
          commit('setError', error)
        })
    },
    signOut ({ commit }) {
      firebase
        .auth()
        .signOut()
        .catch(error => {
          commit('setError', error)
        })
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
    }
  }
})
