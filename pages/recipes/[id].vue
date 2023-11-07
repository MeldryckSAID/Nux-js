<script setup>
const env = useRuntimeConfig();
const route = useRoute();

const { id } = route.params;

const { data: recipes } = await useAsyncData("recipes", async () => {
  return $fetch(env.public.apiUrl + "/recipes/" + id);
});
</script>

<template>
  <div class="p-recipe-id">
    <h1>Hello ID: {{ route.params.id }}</h1>
  </div>

  <div class="presentation">
    <div>
      <p class="presentation__title">Recette :</p>
      <MyTitle el="h3" size="small" bold="bold">{{
        recipes.recipe_name
      }}</MyTitle>
    </div>

    <div class="presenation__image">
      <img :src="recipes.image_url" alt="" />
    </div>
    <div class="presenation__ingredient">
      <MyIcon
        name="Search"
        color="primary"
        stroke="white"
        size="regular"
      ></MyIcon>
      <MyTitle el="h4" weight="bold" size="small" bold="bold"
        >- Listes des ingrédients de la recette :</MyTitle
      >
      <ul>
        <li v-for="ingredient in recipes.ingredients">
          {{ ingredient.quantity }} {{ ingredient.unit }} of
          {{ ingredient.name }}
        </li>
      </ul>
    </div>
  </div>

  <div class="go">
    <MyButton class="go_back" variant="rounded" color="primary" size="small">
      <MyIcon name="Arrow Left" color="white" size="small" />
      <router-link to="/">Retour à l'accueil</router-link>
    </MyButton>
  </div>
</template>

<style lang="scss">
.presentation {
  display: flex;
  justify-content: space-evenly;
  .presenation__ingredient {
    width: fit-content;
    background-color: $white;
    border: 1px solid $gray;
    border-radius: 20px;
    padding: rem(50);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: rem(30);
  }
  .presentation__title {
    color: $primary-color;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .presenation__image {
    img {
      width: rem(500);
      border-radius: rem(40);
      border: 1px solid $gray;
    }
  }
}

.go {
  display: flex;
  justify-content: center;
  padding: 5%;
  .go_back {
    display: flex;
    gap: 20px;
    a {
      text-decoration: none;
      color: $white;
    }
  }
}
</style>
