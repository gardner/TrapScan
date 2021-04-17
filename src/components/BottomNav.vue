<template>
  <v-bottom-navigation v-model="value">
    <v-btn value="dashboard" to="/dashboard">
      <span>Dashboard</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn value="scan" to="/scan">
      <span>Scan</span>
      <v-icon>mdi-cube-scan</v-icon>
    </v-btn>

    <v-btn value="history">
      <span>History</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  data: () => ({ value: 'recent' })
}
</script>
