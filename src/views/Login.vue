<template>
    for
  <label for="email">Email</label>
  <input type="text" name="email">

  <label for="password">Password</label>
  <input type="password">
</template>

<script setup>
import { ref } from "vue";

    const email = ref(null)
    const password = ref(null)
</script>

<style scoped>
input {
    padding: 10px;
}
</style>