<script>
/****************  Componenti template *****************/
import ProjectCard from '../projects/ProjectCard.vue';

import axios from 'axios';
const baseEndpoint = 'http://localhost:8000/api/projects/'

export default {
    name: 'HomePage',
    data() {
        return {
            projects: []
        }
    },
    components: { ProjectCard },
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

    <h1 class="text-center my-5"> I miei progetti</h1>
    <div class="row row-cols-3">
        <ProjectCard v-for="project in projects" :project="project" :isProjectShow="false" />
    </div>

</template>

<style lang='scss' scoped>
/* style here */
</style>