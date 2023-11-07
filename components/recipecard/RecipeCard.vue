<script setup>
const env = useRuntimeConfig();

const props = defineProps({});

const { data: recipes } = await useAsyncData("recipes", () => {
  return $fetch(env.public.apiUrl + "/recipes");
});
</script>

<template>
  <div class="test">
    <div v-for="recipes in recipes" :key="recipe_id">
      <RecipeCardItem
        :id="recipes.recipe_id"
        :title="recipes.recipe_name"
        :description="recipes.recipe_description"
        :image="recipes.image_url"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
