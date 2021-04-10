<template>
  <v-bottom-navigation v-model="value">
    <v-btn value="recent" to="/dashboard">
      <span>Dashboard</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn value="favorites" to="/scan">
      <span>Scan</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn value="nearby">
      <span>Profile</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  data: () => ({ value: 'recent' })
}
</script>
