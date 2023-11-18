<script setup>
const env = useRuntimeConfig();

const props = defineProps({});

const { data: recipes } = await useAsyncData("recipes", () => {
  return $fetch(env.public.apiUrl + "/recipes");
});

console.log(recipes);
</script>

<template>
  <div class="Cardsapi">
    <div v-for="recipes in recipes" :key="recipe_id">
      <RecipeCardItem
        :id="recipes.recipe_id"
        :title="recipes.recipe_name"
        :description="recipes.recipe_description"
        :image="recipes.image_url"
        :note="note"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Cardsapi {
  display: grid;
  gap: rem(30);
  grid-template-columns: repeat(3, 1fr);
}
</style>
