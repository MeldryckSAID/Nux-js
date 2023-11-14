<template>
  <main class="layout">
    <header class="layout__header">
      <MyHeader
        imageAlt="logo de l'entreprise"
        imageSrc="../../..//public/logo.png"
      />
    </header>

    <NuxtPage />
    <footer>
      <MyFooter />
    </footer>
  </main>
</template>
<style lang="scss" scoped>
.layout{
  display: flex;
  flex-direction: column;

}
</style>
