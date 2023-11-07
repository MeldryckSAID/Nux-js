<script setup>
defineProps({
  id: Number,
  title: String,
  description: String,
  image: String,
  note: String,
});
</script>

<template>
  <div class="c-recipe-card">
    <div class="c-recipe-card__content">
      <img class="c-recipe-card__image" :src="image" alt="" />
      <p class="c-recipe-card__title">{{ title }}</p>
      <!-- <p class="c-recipe-card__description">{{ description }}</p> -->
      <div class="c-recipe-card__like">
        <MyIcon color="none" name="Favori" stroke="primary" />
        <p class="note">{{ note }}</p>
      </div>
      <div class="c-recipe-card__button">
        <RouterLink :to="`/recipes/${id}`">
          <MyButton
            color="white"
            variant="rounded"
            size="small"
            tcolor="primary"
            >More info</MyButton
          >
        </RouterLink>
        <RouterLink :to="`/recipes/${id}`">
          <MyButton
            color="primary"
            variant="rounded"
            size="small"
            tcolor="white"
            >Add to cart</MyButton
          >
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.c-recipe-card {
  background-color: $white;
  box-shadow: 0 0 31px 0 rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  width: 520px;
  height: 550px;
  transition: border 0.3s;
  border: 2px solid $white;

  &__content {
    padding: 20px;
  }

  &__image {
    background-color: red;
    width: 480px;
    height: 333px;
    aspect-ratio: 1;
    object-fit: cover;
  }

  &__title {
    line-height: 1.2;
    color: black;
    font-family: Montserrat;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
  &__like {
    display: flex;
    justify-content: flex-end;
  }
  &__button {
    display: flex;
    justify-content: space-around;
  }

  &__description {
    font-size: 16px;
    color: black;
    line-height: 1.2;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
}
.c-recipe-card:hover {
  border: 2px solid $primary-color;
}
</style>
