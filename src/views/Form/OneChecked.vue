<template>
  <div>
    <h2>I checked this trap QR TEST-123 and...</h2>
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
          title: 'It was empty',
          goesTo: 2,
          formData: {
            strikes: 0,
            species_caught: 'None',
            trap_condition: 'Ok',
            words: 'The trap caught nothing, '
          }
        },
        {
          title: 'Something was in it',
          goesTo: 3,
          formData: {
            strikes: 0,
            status: 'Sprung',
            trap_condition: 'Ok',
            words: 'The trap caught a '
          }
        },
        {
          title: 'Somethings wrong',
          goesTo: 4,
          formData: {
            strikes: 0,
            species_caught: 'None',
            rebaited: 'No',
            bait_type: 'None'
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
