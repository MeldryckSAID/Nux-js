<script setup>
import { useGlobalStore } from "@/stores/global";

const store = useGlobalStore();
console.log(store);
</script>
<template>
  <!-- <div class="c-header__count" @click="store.increment()">
    {{ store.count }}//{{ store.foo }}
  </div> -->
  <MyHeader />
</template>
<style lang="scss"></style>
