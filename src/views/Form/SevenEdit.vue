<template>
  <div>
    <h2>Basic Form</h2>
    <p>Not implemented</p>
    <div class="text-center">
        <v-btn class="ma-2" color="primary" @click="save">Save</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    save () {
      this.$store.disptach('setFromIndex', { index: 6 })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
