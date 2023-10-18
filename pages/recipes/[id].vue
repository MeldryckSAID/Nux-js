<script setup>
const route = useRoute();
</script>

<template>
  <div class="p-recipe-id">
    <h1>Hello ID: {{ route.params.id }}</h1>
  </div>
</template>

<style lang="scss"></style>
