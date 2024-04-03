<script>
import axios from 'axios';
import ProjectCard from '../projects/ProjectCard.vue';
import { store } from '../../data/store';
const baseUri = 'http://localhost:8000/api';


export default {
    name: "TypeProjectsPage",
    components: { ProjectCard },
    data: () => ({
        projects: [],
        typeLabel: '',
        store,
    }),
    methods: {
        async fetchProjects() {
            store.isLoading = true;
            try {
                const res = await axios.get(`${baseUri}/types/${this.$route.params.slug}/projects/`);
                const { label, projects } = res.data;
                this.projects = projects;
                this.typeLabel = label;
            } catch (err) {
                console.error(err);
                this.$router.push({ name: 'not-found' });
            }
            store.isLoading = false;
        }
    },
    created() {
        this.fetchProjects()
    }
};
</script>

<template>
    <div v-if="!store.isLoading">
        <h1 class="text-center my-5">Progetti con tecnologia: <b>{{ typeLabel }}</b></h1>
        <div class="row row-cols-3">
            <ProjectCard v-for="project in projects" :project="project" :isProjectShow="false" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
/* Style here */
</style>