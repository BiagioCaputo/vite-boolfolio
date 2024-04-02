<script>
/****************  Componenti template *****************/
import AppHeader from './components/AppHeader.vue';
import { store } from './data/store';

export default {
  name: "Boolfolio",
  components: {
    AppHeader,
  },
  data: () => ({
    store,
  }),
};

</script>

<template>
  <AppHeader />
  <main class="container my-5">
    <AppLoader v-if="store.isLoading" />
    <RouterView />
  </main>
</template>

<style scoped></style>
