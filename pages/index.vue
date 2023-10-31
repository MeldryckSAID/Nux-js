<script setup>
const { client } = usePrismic();
const { data: home } = await useAsyncData("home", () =>
  client.getSingle("homepage")
);
</script>

<template>
  <div class="p-index">
    <!-- <h1>{{ home.data }}</h1> -->
    <Hero
      :title="home.data.hero_title"
      :text="home.data.hero_text"
      :buttons="home.data.hero_buttons"
    />
  </div>
</template>

<style lang="scss"></style>
