<script setup>
const { client } = usePrismic();
const { data: home } = await useAsyncData("home", () =>
  client.getSingle("homepage")
);
</script>

<template>
  <div class="p-index">
    <Hero
      :title="home.data.hero_title"
      :text="home.data.hero_text"
      :buttons="home.data.hero_buttons"
    />

    <MyInformationPrismics :info="home.data.info" />
    <!-- <Myinformation /> -->

    <pre>{{ home.data.newsletter }}</pre>
    <MynewsletterPrismics :ntitle="home.data.newsletter" />
  </div>
</template>

<style lang="scss"></style>
