<template>
  <div>
    <h2>Something is wrong with it…</h2>
    <ChildForm v-for="option in options"
      :goesTo="option.goesTo"
      :key="option.title"
      :name="option.title"
      :formData="option.formData"
      :title="option.title">
    </ChildForm>
  </div>
</template>

<script>
import ChildForm from './ChildFom'
export default {
  components: {
    ChildForm
  },
  data () {
    return {
      options: [
        {
          title: 'Needs repair or replacing',
          goesTo: 6,
          formData: {
            status: 'Still set, bait OK',
            rebaited: 'No',
            bait_type: 'None',
            words: 'it was still set and the bait was good so I didn\'t rebait it.'
          }
        },
        {
          title: 'Bait was old',
          goesTo: 5,
          formData: {
            status: 'Still set, bait bad',
            words: 'it was still set but the bait was bad, '
          }
        },
        {
          title: 'Bait was taken',
          goesTo: 5,
          formData: {
            status: 'Still set, bait missing',
            words: 'it was still set but the bait was missing, '
          }
        },
        {
          title: 'Trap was sprung',
          goesTo: 5,
          formData: {
            status: 'Sprung',
            species_caught: 'None',
            words: 'it was triggered though, '
          }
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
</style>
