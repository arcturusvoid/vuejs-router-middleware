<script setup>

</script>

<template>
  <router-link :to="{ name: 'Login' }">Login</router-link>
  <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>

  <router-view></router-view>
</template>

<style scoped></style>
