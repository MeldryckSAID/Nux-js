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

    <!-- <pre>{{ home.data }}</pre> -->

    <h5 class="presentation">
      <PrismicRichText :field="home.data.presentation_service" />
    </h5>
    <h5><PrismicRichText :field="home.data.service_title" /></h5>

    <MyServicePrismics :Cardservice="home.data.services_card" />

    

    <MynewsletterPrismics :newsletter="home.data.newsletter" />
  </div>
</template>

<style lang="scss">
.presentation {
  color: $primary-color;
}
</style>
