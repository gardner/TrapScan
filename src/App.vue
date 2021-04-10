<template>
  <v-app>
    <navbar></navbar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer v-if="isUserAuth" color="white" :elevation="0" padless app>
      <bottom-nav elevation="0"></bottom-nav>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
export default {
  name: 'App',
  components: {
    Navbar,
    BottomNav
  },
  data: () => ({
    //
  }),
  mounted () {
    this.auth()
  },
  methods: {
    ...mapActions(['auth'])
  },
  computed: {
    ...mapGetters(['getUser', 'isUserAuth'])
  }
}
</script>
