<template>
  <section class="part_service">
    <div class="service" v-for="item in Cardservice">
      <img :src="item.service_image_card.url" />
      <PrismicRichText :field="item.service_title_card" />
      <PrismicRichText :field="item.service_text_card" />
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  Cardservice: Array,
});
</script>
<style lang="scss" scooped>
.part_service {
  display: flex;
  justify-content: space-around;
}
.service {
  /* space */
  padding: 2%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 486px;

  /* base */
  color: #000;
  text-align: center;

  /* P1 */
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  /*border*/
  border: 1px solid var(--Gray, #b6b6b6);
  background: var(--White, #fff);
  border-radius: 35px;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);
  transition:  0.3s;
}
.service:hover{
   box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.4);
}
</style>
