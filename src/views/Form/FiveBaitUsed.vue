<template>
  <div>
    <h2>I rebaited the trap with…</h2>
    <div v-if="! moreItems">
      <ChildForm  v-for="option in getBait"
        :goesTo="6"
        :key="option"
        :name="option"
        :formData="{ rebaited: 'Yes', bait_type: option, words: `so I rebaited it with ${option}` }"
        :title="option"></ChildForm>
    </div>
    <div v-else>
      <ChildForm  v-for="option in getExtraBait"
        :goesTo="6"
        :key="option"
        :name="option"
        :formData="{ rebaited: 'Yes', bait_type: option, words: `so I rebaited it with ${option}` }"
        :title="option"></ChildForm>
    </div>
    <ChildForm
        :goesTo="6"
        key="I didn’t rebait it"
        name="I didn’t rebait it"
        :formData="{ rebaited: 'No', bait_type: 'None', words: 'but I didn\'t rebait it' }"
        title="I didn’t rebait it"></ChildForm>

    <!-- This button will need to be updated with any changes to ChildForm styling -->
    <div class="text-center">
        <v-btn class="ma-2" outlined color="primary" @click="showMoreItems">Show More Items</v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ChildForm from './ChildFom'
export default {
  components: {
    ChildForm
  },
  data () {
    return {
      moreItems: false,
      items: []
    }
  },
  methods: {
    showMoreItems () {
      console.log('more')
      this.moreItems = true
    }
  },
  computed: {
    ...mapGetters(['getBait', 'getExtraBait'])
  }
}
</script>

<style lang="scss" scoped>
</style>
