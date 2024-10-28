<script setup lang="ts">
import { useMovieStore } from './store';
import Layout from './components/layout.vue';

const movieStore = useMovieStore();

movieStore.setIsLoading(true);
movieStore.fetchMovie().then(() => {
  console.log('done', movieStore.total, movieStore.movies);
});
</script>

<template>
  <Layout class="app" />
</template>

<style scoped>
.app {
  height: 100vh;
  width: 100vw;
  display: flex;
}
</style>
