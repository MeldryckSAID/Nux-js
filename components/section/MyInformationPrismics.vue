<template>
  <div class="line_information">
    <div class="info" v-for="item in info">
      <img :src="item.info_image.url" />
      <MyTitle el="h5" size="medium" strong="strong"
        ><PrismicRichText :field="item.info_title"
      /></MyTitle>
      <PrismicRichText :field="item.info_text" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  info: Array,
});
</script>
<style lang="scss" scooped>
.line_information {
  font-family: Montserrat;
  display: flex;
  justify-content: space-around;
  .info {
    display: grid;
    justify-items: center;
    border-right: 2px solid $gray;
    padding: 5%;
    
  }
}
</style>
