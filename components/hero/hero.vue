<Style lang="scss">
.c-hero {
  &__title {
    font-size: 40px;
    font-weight: 700;
    line-height: 1.2;
    color: black;
  }
  strong {
    color: orange;
  }

  &__text {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.1;
    color: black;
  }
}
</Style>

<template>
  <section class="c-hero">
    <div class="c-hero__title">
      <prismic-rich-text :field="title" />
    </div>
    <div class="c-hero__text">
      <prismic-text :field="text" />
    </div>
    <div class="c-hero__button">
      <div v-for="button in buttons">
        <MyButton color="primary" tcolor="white" size="small"
          v-if="button.button_type === 'default'"
          class="c-hero__button -default"
        >
          <a :href="button.button_link.url">{{ button.button_label }}</a>
        </MyButton >
        <button
          v-else="button.button_type === 'videos'"
          class="c-hero__button -videos"
        >
          <a :href="button.button_link.url">{{ button.button_label }}</a>
        </button>

        <button :href="button.button_label" :variant="button.button_type">
          {{ button.button_label }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>

import {client} from '../utils/axios.js'

const props = defineProps({
  title: Array,
  text: Array,
  buttons: Array,
});

const { data: recipes } = await useAsyncData("recipes", async () => {
  return await getRecipes();
});
</script>
