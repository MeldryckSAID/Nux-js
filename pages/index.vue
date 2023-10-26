<script setup>
const { client } = usePrismic();
const { data: home } = await useAsyncData("home", () =>
  client.getSingle("homepage")
);

</script>

<template>
  <myheaderaurelieforever/>
  <div class="p-index">
    <p>Page d'accueil</p>

    <!-- <h1>{{ home.data }}</h1> -->
    <prismic-rich-text :field="home.data.hero_title" />
    
    <Hero
      :title="home.data.hero_title"
      :text="home.data.hero_text"
      :buttons="home.data.hero_buttons"
    />

 
  </div>
</template>

<style lang="scss"></style>
