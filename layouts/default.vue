<template>
  <main class="layout">
    <header class="layout__header">
      <MyHeader imageAlt="logo de l'entreprise" imageSrc="../../..//public/logo.png" />
    </header>
    <aside class="layout__aside">
      <slot name="aside"></slot>
    </aside>
    <article class="layout__article">
      <NuxtPage />
    </article>

    <MyFooter />
  </main>
</template>
<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template:
    "header"
    "article"
    "aside"
    "footer";

  @include medium-up {
    grid-template:
      "header header header"
      "article article aside"
      "footer footer footer";
  }

  > * {
    padding: rem(16);
  }
  &__article {
    grid-area: article;
  }
  &__aside {
    grid-area: aside;
  }
  &__footer {
    background: $primary-color;
    grid-area: footer;
  }
  &__header {
    grid-area: header;
  }
}
</style>
