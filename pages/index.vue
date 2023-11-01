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

    <div class="presentation_section">
      <h5 class="section__name">
        <PrismicRichText :field="home.data.presentation_service" />
      </h5>
      <MyTitle el="h3" size="large">
        <PrismicRichText :field="home.data.service_title" />
      </MyTitle>
    </div>
    <MyServicePrismics :Cardservice="home.data.services_card" />
    <div class="presentation_section">
      <h5 class="section__name">
        <PrismicRichText :field="home.data.presentation_testimonials" />
      </h5>
      <MyTitle el="h3" size="large">
        <PrismicRichText :field="home.data.testimonials_title" />
      </MyTitle>
    </div>
    <MytestimonialsPrismics :testimonials="home.data.testinomial"/>
    <!-- <pre>{{ home.data.testinomial }}</pre> -->
    
    <MynewsletterPrismics :newsletter="home.data.newsletter" />
  </div>
</template>

<style lang="scss">
.presentation_section {
  text-align: center;
  .section__name {
    color: $primary-color;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}
</style>
