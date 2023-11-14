<Style lang="scss">
.c-hero {
  display: grid;
  padding: 5%;
  grid-template-columns: repeat(2, 1fr);

  strong {
    color: orange;
  }

  p {
    color: $black;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .section__rigth {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 3%;
  }
  .lumiere{
    z-index: 1;
  }
   .ombre {
    position: absolute; 
    background: linear-gradient(210deg, #d9d9d9 35.39%, rgba(217, 217, 217, 0) 35.50%);
    border-radius: 5%;
    width: 445px;
    height: 800px;
    z-index: 0; 
    
  }
}
.c-hero__button {
  display: flex;
  justify-content: space-evenly;
}
</Style>

<template>
  <MyBackDelivery
    text_Back="Bike Delivery"
    image-src="../../..//public/livraison.png"
  />
  <section class="c-hero">
    <div class="section__left">
      <div class="section__title">
        <MyTitle el="h2" size="xlarge"
          ><prismic-rich-text :field="title"
        /></MyTitle>
        <p><prismic-text :field="text" /></p>
      </div>
      <div class="c-hero__button">
        <div v-for="button in buttons">
          <MyButton
            v-if="button.button_type === 'default'"
            color="primary"
            tcolor="white"
            :href="button.button_label"
            :variant="button.button_type"
          >
            <a :href="button.button_link.url">{{ button.button_label }}</a>
          </MyButton>
          <MyButton
            iconl="true"
            color="white"
            tcolor="black"
            v-else="button.button_type === 'order'"
          >
            <a :href="button.button_link.url">{{ button.button_label }}</a>
          </MyButton>
        </div>
      </div>
    </div>
    <div class="section__rigth">
      <MyCardsMenu class="lumiere" />
      <div class="ombre"></div>
    </div>
  </section>
</template>

<script setup>
import { client } from "../utils/axios.js";

const props = defineProps({
  title: Array,
  text: Array,
  buttons: Array,
});

const { data: recipes } = await useAsyncData("recipes", async () => {
  return await getRecipes();
});
</script>
