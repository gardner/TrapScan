import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    form: {
      QR_ID: null,
      code: null,
      date: null,
      recorded_by: null,
      strikes: null,
      species_caught: null,
      status: null,
      rebaited: null,
      bait_type: null,
      trap_condition: null,
      notes: null,
      words: '',
      trap_last_checked: null
    },
    form_navigation_stack: [1],
    form_navigation_data_history: [
      {
        QR_ID: null,
        code: null,
        date: null,
        recorded_by: null,
        strikes: null,
        species_caught: null,
        status: null,
        rebaited: null,
        bait_type: null,
        trap_condition: null,
        notes: null,
        words: '',
        trap_last_checked: null
      }
    ],
    form_index: 1,
    user: null,
    error: null,
    email: null,
    species: ['Rat', 'Mouse', 'Stoat', 'Weasel', 'Hedgehog'],
    extraSpecies: ['Rat - Kiore', 'Rat - Norway', 'Unspecified', 'Bird', 'Rat - Ship', 'Cat', 'Deer', 'Dog', 'Ferret', 'Goat', 'Hare', 'Magpie', 'Peafowl', 'Pig', 'Possum', 'Rabbit', 'Turkey'],
    bait: ['Peanut Butter', 'Goodnature Rat and Mouse Lure', 'Dehydrated Rabbit', 'Whole egg', 'Chocolate'],
    extraBait: ['Carrot ', 'Cereal', 'Cheese', 'Dried fruit ', 'Ferret Bedding', 'Fresh Fruit', 'Fresh Meat', 'Fresh Possum', 'Fresh Rabbit', 'Golf ball', '​Goodnature Stoat Lure', 'Lure', 'Lure-it Salmon Spray', 'Mayo', 'Mustelid and Cat Lure', 'Nut', 'Nutella', 'Possum Dough', 'Rat and Possum Lure', 'Rat oil', 'Salted meat', 'Salted Possum', 'Salted Rabbit', 'Smooth', 'Terracotta Lures', 'Tinned Sardines']
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
    },
    setFormIndex (state, index) {
      state.form_index = index
      state.form_navigation_stack.push(index)
    },
    formBackNavigate (state) {
      // Navigate back to last step
      state.form_navigation_stack.pop()
      // Reset the form data to the last step
      state.form_navigation_data_history.pop()
      state.form = { ...state.form_navigation_data_history[state.form_navigation_stack.length - 1] }
    },
    updateForm (state, form) {
      const currentWords = state.form.words
      state.form = Object.assign(state.form, form)

      // Handle 'words' being concatenated, everything else can be assigned
      if (typeof form.words !== 'undefined') {
        state.form.words = currentWords + form.words
      }

      // Push the new form to the historical, this will be popped on backNavigate
      const formBackup = { ...state.form }
      state.form_navigation_data_history.push(formBackup)
    }
  },
  actions: {
    updateForm ({ commit }, { form }) {
      commit('updateForm', form)
    },
    formBackNavigate ({ commit }) {
      commit('formBackNavigate')
    },
    setFormIndex ({ commit }, { index }) {
      commit('setFormIndex', index)
    },
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
    },
    getSpecies (state) {
      return state.species
    },
    getExtraSpecies (state) {
      return state.extraSpecies
    },
    getFormIndex (state) {
      return state.form_index
    },
    getCurrentFormIndex (state) {
      return state.form_navigation_stack[state.form_navigation_stack.length - 1]
    },
    getBait (state) {
      return state.bait
    },
    getExtraBait (state) {
      return state.extraBait
    },
    getForm (state) {
      return state.form
    },
    getUserEmail (state) {
      return state.user.user.email
    }
  }
})
