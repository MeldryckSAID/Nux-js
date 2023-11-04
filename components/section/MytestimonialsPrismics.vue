<template>
  <section class="part_testimonials">
    <div class="carrousel" v-for="item in testimonials">
      <div class="carrousel_userInfo">
        <MyIcon
          class="slide__icon__left"
          name="Arrow Left"
          color="primary"
          stroke="white"
          size="small"
        />
        <div class="user_speak">
          <img :src="item.testimonials_image_carrousel.url" />
          <div class="userInfo_txt">
            <PrismicRichText :field="item.testimonials_user" />
            <PrismicRichText :field="item.testimonials_job" />
          </div>
        </div>
        <p><PrismicRichText :field="item.testimonials_text" /></p>
        <MyIcon
          class="slide__icon__rigth"
          name="Arrow Rigth"
          color="primary"
          stroke="white"
          size="small"
        />
      </div>
      <img :src="item.testimonials_image.url" />
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  testimonials: Array,
});
</script>
<style lang="scss" scooped>
.part_testimonials {
  display: flex;
  flex-direction: row;
  justify-content: center;

  .carrousel {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .carrousel_userInfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 35px;
      background: var(--White, #fff);
      box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.1);
      border-bottom: 2px solid black;

      position: relative;
      .slide__icon__left {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .slide__icon__rigth {
        transform: translate(50%, -50%);
        position: absolute;
        right: 0;
        top: 50%;
      }
      img {
        border-radius: 60%;
        height: fit-content;
        width: fit-content;
      }
      .user_speak {
        display: flex;
        justify-content: center;
      }
      p {
        text-align: center;
        color: #000;
        font-family: Montserrat;
      }
    }
  }
}
</style>
