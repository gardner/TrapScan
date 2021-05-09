<template>
  <div>
    <v-stepper v-model="e1">
       <v-btn v-if="e1 !== 1" outlined elevation="2" class="ml-4 mt-4" color="secondary" @click="backButton">
          <v-icon left>
            mdi-arrow-left
          </v-icon>Previous Step
        </v-btn>
      <v-stepper-header style="display: none;">
        <v-stepper-step :complete="e1 > 1" step="1">
          Checked and
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">
          Empty
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 3" step="3">
          Species Caught
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 4" step="4">
          Something's wrong
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 5" step="5">
          Bait Used
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 6" step="6">
          Summary
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 7" step="7">
          Edit
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 8" step="8">
          Notes
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 9" step="9">
          Confirmation
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <OneChecked></OneChecked>
        </v-stepper-content>

        <v-stepper-content step="2">
          <TwoEmpty></TwoEmpty>
        </v-stepper-content>

        <v-stepper-content step="3">
          <ThreeSpecies></ThreeSpecies>
        </v-stepper-content>

        <v-stepper-content step="4">
          <FourSomethingsWrong></FourSomethingsWrong>
        </v-stepper-content>

        <v-stepper-content step="5">
          <FiveBaitUsed></FiveBaitUsed>
        </v-stepper-content>

        <v-stepper-content step="6">
          <Summary></Summary>
        </v-stepper-content>

        <v-stepper-content step="7">
          <SevenEdit></SevenEdit>
        </v-stepper-content>

        <v-stepper-content step="8">
          <EightNotes></EightNotes>
        </v-stepper-content>

        <v-stepper-content step="9">
          <Confirmation></Confirmation>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import OneChecked from './OneChecked'
import TwoEmpty from './TwoEmpty'
import ThreeSpecies from './ThreeSpecies'
import FourSomethingsWrong from './FourSomethingsWrong'
import FiveBaitUsed from './FiveBaitUsed'
import Summary from './Summary'
import SevenEdit from './SevenEdit'
import EightNotes from './EightNotes'
import Confirmation from './Confirmation'
export default {
  components: {
    OneChecked,
    TwoEmpty,
    ThreeSpecies,
    FourSomethingsWrong,
    FiveBaitUsed,
    Summary,
    SevenEdit,
    EightNotes,
    Confirmation
  },
  data () {
    return {
      test: 1
    }
  },
  computed: {
    ...mapGetters({
      e1: 'getCurrentFormIndex'
    })
  },
  methods: {
    backButton () {
      this.$store.dispatch('formBackNavigate')
    }
  }
}
</script>
