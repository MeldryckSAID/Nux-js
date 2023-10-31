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
}
</Style>

<template>
  <section class="c-hero">
    <div class="c-hero__title">
      <MyTitle el="h2" size="xlarge"><prismic-rich-text :field="title"/></MyTitle>
      <p> <prismic-text :field="text" /></p>
      
      <div class="c-hero__button">
      <div v-for="button in buttons">
        <MyButton
          color="primary"
          tcolor="white"
          size="small"
          v-if="button.button_type === 'default'"
          class="c-hero__button -default"
        >
          <a :href="button.button_link.url">{{ button.button_label }}</a>
        </MyButton>
        <MyButton
          v-else="button.button_type === 'videos'"
          class="c-hero__button -videos"
        >
          <a :href="button.button_link.url">{{ button.button_label }}</a>
        </MyButton>

        <MyButton :href="button.button_label" :variant="button.button_type">
          {{ button.button_label }}
        </MyButton>
      </div>
    </div>
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
