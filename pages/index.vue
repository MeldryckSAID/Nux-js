<script setup>
const { client } = usePrismic();
const { data: home } = await useAsyncData("home", () =>
  client.getSingle("homepage")
);
const { data: recipes } = await useAsyncData("recipes", () => {
  return $fetch(env.public.apiUrl + "/recipes");
});


onMounted(async () => {
  try {
    const response = await fetch("/recipes");
    recipes.value = await response.json();
  } catch (error) {
    console.error("Erreur :", error);
  }
});
</script>

<template>
  <div class="p-index">
    <!-- APPEL DATA PRISMICS -->
    <!-- <pre>{{ home.data }}</pre> -->
    <!-- titre -->
    <Hero
      :title="home.data.hero_title"
      :text="home.data.hero_text"
      :buttons="home.data.hero_buttons"
    />

    <!-- information -->
    <MyInformationPrismics :info="home.data.info" />

    <!-- services -->
    <div class="presentation_section">
      <h5 class="section__name">
        <PrismicRichText :field="home.data.presentation_service" />
      </h5>
      <MyTitle el="h3" size="large">
        <PrismicRichText :field="home.data.service_title" />
      </MyTitle>
    </div>
    <MyServicePrismics :Cardservice="home.data.services_card" />
    
    <!-- menu -->
    <div class="presentation_section">
      <h5 class="section__name">
        <PrismicRichText :field="home.data.presentation_item" />
      </h5>
      <MyTitle el="h3" size="large">
        <PrismicRichText :field="home.data.item_title" />
      </MyTitle>
    </div>
    <RecipeCard
      v-for="recipe in recipes"
      :key="recipe.id"
      :id="recipe.id"
      :title="recipe.recipe_name"
      :description="recipe.recipe_description"
      :image="recipe.image_url"
    />
    <div class="section__button">
      <MyButton
        iconr="true"
        color="primary"
        variant="rounded"
        size="small"
        tcolor="white"
        >See More Product</MyButton
      >
    </div>

    <!-- How to work -->
    <div class="presentation_section">
      <h5 class="section__name">
        <PrismicRichText :field="home.data.presentation_howto" />
      </h5>
      <MyTitle el="h3" size="large">
        <PrismicRichText :field="home.data.howto_title" />
      </MyTitle>
    </div>
    <MyHowToPrismics :howto="home.data.how_to" />

    <!-- Témoignage -->
    <div class="presentation_section">
      <h5 class="section__name">
        <PrismicRichText :field="home.data.presentation_testimonials" />
      </h5>
      <MyTitle el="h3" size="large">
        <PrismicRichText :field="home.data.testimonials_title" />
      </MyTitle>
    </div>
    <MytestimonialsPrismics :testimonials="home.data.testinomial" />

    <!-- Newsletter -->
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
