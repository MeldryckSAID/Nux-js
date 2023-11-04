<template>
  <div class="Newletter" v-for="item in newsletter">
    <img :src="item.newsletter_image.url" />

    <div class="Newletter__information">
      <MyTitle el="h5" size="small" strong="strong"
        ><PrismicRichText :field="item.newsletter_title"
      /></MyTitle>
      <p><PrismicText :field="item.newsletter_text" /></p>
      <div class="Newletter__form" v-for="newsletter in newsletter">
        <input placeholder="Type your email....." type="text" />
        <MyButton
          v-if="newsletter.newsletter_button === 'sub'"
          color="primary"
          tcolor="white"
          :href="newsletter.newsletter_button_label"
        >
          {{ newsletter.newsletter_button_label }}
        </MyButton>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  newsletter: Array,
 
});
</script>
<style lang="scss" scooped>
.Newletter {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 1560px;
  height: 369px;
  border-radius: 31.5px;
  background-color: $black;
  color: $white;
  position: relative;
  align-items: center;
  img {
    height: 170%;
    aspect-ratio: 1/1;
    object-fit: contain;
  }
  &__information {
    h5 {
      font-family: Montserrat;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    p {
      font-family: Montserrat;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      width: 532px;
      height: 75px;
    }

    .Newletter__form {
      display: flex;
      justify-content: space-evenly;
      background-color: $white;
      border-radius: 21.5px;
      padding-left: 20px;
      padding-top: 10px;
      padding-bottom: 10px;
      input {
        border: none !important;
        font-size: $regular-font-size;
      }
      ::placeholder {
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        color: black;
      }
    }
  }
}
</style>
