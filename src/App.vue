<script>
import axios from 'axios';
const baseEndpoint = 'http://localhost:8000/api/projects/'
export default {
  name: 'Boolfolio',
  methods: {
    fetchProjects() {
      axios.get(baseEndpoint).then((res) => {
        //test ricezione dati
        console.log(res.data)
      })
    }
  },

  created() {
    this.fetchProjects();
  }
}
</script>

<template>
  <h1 class="text-danger"> Boolfolio</h1>
</template>

<style scoped></style>
