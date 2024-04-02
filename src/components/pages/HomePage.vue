<script>
/****************  Componenti template *****************/
import ProjectCard from '../projects/ProjectCard.vue';
import BasePagination from '../BasePagination.vue';


import axios from 'axios';
const baseEndpoint = 'http://localhost:8000/api/projects/'

export default {
    name: 'HomePage',
    data() {
        return {
            projects: {
                data: [],
                links: []
            },
        }
    },
    components: { ProjectCard, BasePagination },
    methods: {
        fetchProjects(endpoint) {
            if (!endpoint) endpoint = baseEndpoint;
            axios.get(endpoint)
                .then((res) => {
                    const { data, links } = res.data;
                    this.projects = { data, links }; //posso fare cosi invece che data:data e links:links perchè chiave e variabile sono uguali
                }).catch((err) => {
                    console.log(err)
                }).then(() => {
                })
        }
    },
    created() {
        this.fetchProjects();
    }
}
</script>

<template>

    <h1 class="text-center my-5"> I miei progetti</h1>
    <div class="row row-cols-3">
        <ProjectCard v-for="project in projects.data" :project="project" :isProjectShow="false" />
        <BasePagination :links="projects.links" @change-page="fetchProjects" />
    </div>


</template>

<style lang='scss' scoped>
/* style here */
</style>