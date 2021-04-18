import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

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
        .catch(error => {
          alert(error)
          commit('setError', error)
        })
    },
    signOut ({ commit }) {
      firebase
        .auth()
        .signOut()
        .catch(error => {
          alert(error)
          commit('setError', error)
        })
    },
    loginWithGooglePopUp ({ commit }) {
      var provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth()
        .signInWithPopup(provider)
        .catch((error) => {
          alert(error)
          commit('setError', error)
        })
    },
    loginWithGoogleRedirect ({ commit }) {
      var provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth()
        .signInWithRedirect(provider)
        .catch((error) => {
          alert(error)
          commit('setError', error)
        })
    },
    loginWithFacebookPopUp ({ commit }) {
      var provider = new firebase.auth.FacebookAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .catch((error) => {
          alert(error)
          commit('setError', error)
        })
    },
    startMagicSignIn ({ commit }, { email }) {
      commit('setEmail', email)
    },
    finishMagicSignIn ({ commit }, { user }) {
      commit('setUser', user)
    },
    setError ({ commit }, { error }) {
      commit('setError', error)
    },
    setUser ({ commit }, { user }) {
      commit('setUser', user)
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
