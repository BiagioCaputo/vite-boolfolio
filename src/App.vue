<script>
/****************  Componenti template *****************/
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'Boolfolio',
  components: { AppHeader },
}
</script>

<template>
  <AppHeader />
  <main class="container my-5">
    <RouterView />
  </main>
</template>

<style scoped></style>
