<script>
/****************  Componenti template *****************/
import AppHeader from './components/AppHeader.vue';


import axios from 'axios';
const baseEndpoint = 'http://localhost:8000/api/projects/'
export default {
  name: 'Boolfolio',
  components: { AppHeader },
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
  <div class="row">
    <div v-for="project in projects" class="col-4">
      <div class="card mb-3">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>
          <p class="card-text">{{ project.description }}</p>
          <p class="card-text"><small class="text-body-secondary">{{ project.created_at }}</small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
