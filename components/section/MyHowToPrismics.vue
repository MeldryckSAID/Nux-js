<template>
  <section class="how_to">
    <!-- <div class="linehow-container">
      <img class="linehow1" src="../../public/LineHowTo/line1.png" alt="" />
      <img class="linehow2" src="../../public/LineHowTo/line2.png" alt="" />
    </div> -->
    <div class="c_howto" v-for="(item, index) in howto" :key="index">
      <div class="howto-card" :class="{ inverted: index % 2 !== 0 }">
        <img :src="item.howto_image.url" />
        <div>
          <MyTitle el="h5" size="medium" strong="strong">
            <PrismicRichText :field="item.howto_title_card"
          /></MyTitle>
          <PrismicRichText :field="item.howto_text_card" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  howto: Array,
});
</script>
<style lang="scss" scooped>
.how_to {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
}
.linehow-container {
  position: absolute;
  .linehow1 {
    width: 40%;
    top: 0%;
  }
}

.howto-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &.inverted {
    flex-direction: column-reverse;
  }

  img {
    max-width: 100%;
  }
}
</style>
