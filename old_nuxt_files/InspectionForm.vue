<template>
  <div class="container">

     <h3 class="formwidth"> {{formTitleText}} QR ID <span class="qrName"> {{ QRID }} </span> </h3>
    
    <div class="fieldContainer">
     
      <!--below is copy and pasted from https://bulma.io/documentation/form/general/-->

<!-- MANUAL QR ID -->
      <div v-if="scannedQR == false" class="field">
        <label class="label">QR ID</label>
        <div class="control">
          <input 
            v-model="manQR"
            class="input"
            type="text"
            placeholder="QR identifcaiton number"
            selec
          />
        </div>
      </div>
      

<!-- SPECIES CAUGHT -->
        <div class="field">
        <label class="label">Species Caught</label>
        <div class="control">
          <div class="select">
            <select v-model="speciesCaught">
               <option v-for="species in species"> {{species}} </option>
            </select>
          
          </div>
        </div>
      </div>


<!-- NOTES -->
      <div class="field">
        <label class="label">Notes</label>
        <div class="control">
          <textarea v-model="notes" class="textarea" placeholder="Notes about the condition of the trap, the catch, or anything else you want us to know"></textarea>
        </div>
      </div>



<!-- BUTTONS -->
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link"
          v-on:click="submitInspection"
         >Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>
    </div>

    <!--above is copy and pasted from https://bulma.io/documentation/form/general/-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      scannedQR: "",
      manQR: "",
      speciesCaught: "Rat",
      notes: "",
      species: ['Rat', 'Mouse', 'Hedgehog', 'Stoat', 'Weasel', 'Ferret', 'Possum', 'Bird', 'Nothing', 'Other']
    }
  },

  methods: {
    submitInspection() {

    }
  },


  computed: {
    formTitleText() {
      if (this.scannedQR) {
        return 'Submit an inspection for '
      }
      return 'Submit a manual inspection for '
    },

    QRID() {
      if (this.scannedQR) {
        return this.scannedQR
      }
      return this.manQR
    }
  }
  
}

</script>

<style scoped>
.container {
    
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.fieldContainer {
  
  margin-top: 2em;
  align-self: flex-start;
  text-align: left;
}

.formwidth {
 max-width: 200px;
}

.qrName {
  color: white;
  font-weight: bold;
  font-size: 1.2em;
  text-decoration: underline;
  text-decoration-color: aquamarine;
  text-decoration-thickness: 0.2em;
  text-underline-offset: 0.1em;
  
}
</style>