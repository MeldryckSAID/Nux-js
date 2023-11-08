<template>
  <div class="MyInformation">
    <div class="line_information">
      <div
        class="info"
        :class="{ bordered: index === 1 }"
        v-for="(item, index) in info"
      >
        <img :src="item.info_image.url" />
        <MyTitle el="h5" size="small" strong="strong"
          ><PrismicRichText :field="item.info_title"
        /></MyTitle>
        <PrismicRichText :field="item.info_text" />
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  info: Array,
});
</script>
<style lang="scss" scooped>
.MyInformation {
 
  .line_information {
    font-family: Montserrat;
    display: flex;
    justify-content: space-around;
    box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.2);
    height: 318px;
    max-width: 1300px;
    border-radius: 30px;
    .info {
      display: grid;
      justify-items: center;
      padding: 5%;

      &.bordered {
        border-right: 2px solid $gray;
        border-left: 2px solid $gray;
      }
    }
  }
}
</style>
