<script>
import ProjectCard from '../projects/ProjectCard.vue';

import { store } from '../../data/store';
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/'
export default {
    name: 'ProjectDetailPage',
    components: { ProjectCard },
    data() {
        return {
            project: null,
            store
        }
    },
    methods: {
        getProject() {
            store.isLoading = true;
            axios.get(endpoint + this.$route.params.slug)
                .then((res) => {
                    this.project = res.data;
                })
                .catch(err => {
                    console.log(err)
                })
                .then(() => {
                    store.isLoading = false;
                })
        }
    },
    created() {
        this.getProject();
    }
}
</script>

<template>
    <ProjectCard v-if="!store.isLoading && project" :project="project" :isProjectShow="true" />
</template>

<style lang='scss' scoped>
/* style here */
</style>