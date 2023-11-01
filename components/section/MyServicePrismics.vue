<template>
  <div class="service" v-for="item in services_card">
    <img :src="item.service_image_card.url" />
  </div>
</template>
<script setup>
const props = defineProps({
  Cardservice: Array,
});
</script>
<style lang="scss" scooped></style>
