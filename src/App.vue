<script>
/****************  Componenti template *****************/
import AppHeader from './components/AppHeader.vue';
import ProjectCard from './components/projects/ProjectCard.vue';


import axios from 'axios';
const baseEndpoint = 'http://localhost:8000/api/projects/'
export default {
  name: 'Boolfolio',
  components: { AppHeader, ProjectCard },
  data() {
    return {
      projects: []
    }
  },

  methods: {
    fetchProjects() {
      axios.get(baseEndpoint).then((res) => {

        this.projects = res.data
      })
    }
  },

  created() {
    this.fetchProjects();
  }
}
</script>

<template>
  <AppHeader />
  <h1 class="text-center my-5"> I miei progetti</h1>
  <div class="row px-5">
    <ProjectCard v-for="project in projects" :project="project" />
  </div>
</template>

<style scoped></style>
