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
       
          <MyButton
            color="primary"
            variant="rounded"
            size="small"
            tcolor="white"
            >Add to cart</MyButton
          >
      
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.c-recipe-card {
  background-color: $white;
  box-shadow: 0px 0px 31px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 420px;
  height: 380px;
  transition: border 0.3s;
  border: 2px solid $white;

  &__content {
    padding: 20px;
  }

  &__image {
    background-color: red;
    width: 350px;
    height: 175px;
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
  box-shadow: 0px 0px 50px 20px rgba(0, 0, 0, 0.4);
}
</style>
