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
    <!-- <pre>{{ home.data }}</pre> -->

    <h5 class="presentation">
      <PrismicRichText :field="home.data.presentation_service" />
    </h5>
    <h5><PrismicRichText :field="home.data.service_title" /></h5>

    <MyServicePrismics :field="home.data.services_card" />

    <pre>{{ home.data.services_card }}</pre>

    <MyCardsPresta />

    <MynewsletterPrismics :newsletter="home.data.newsletter" />

    <!-- <MyNewsletter
      imageSrc="..//public/burger.png"
      imageAlt="Image aléchante d'un burger"
      title="Subcribe To Our Newsletter"
      paragraphe="Lorem ipsum dolor sit amet, consectetur adipidrscing elit. Purus mauris sem sed urna venenatis vivamus. Egestas in velit nulla viverra turpis id ac. Amet faucibus tempus."
      /> -->
  </div>
</template>

<style lang="scss">
.presentation {
  color: $primary-color;
}
</style>
