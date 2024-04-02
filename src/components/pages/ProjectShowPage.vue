<script>
import ProjectCard from '../projects/ProjectCard.vue';


import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/'
export default {
    name: 'ProjectDetailPage',
    components: { ProjectCard },
    data() {
        return {
            project: null
        }
    },
    methods: {
        getProject() {
            axios.get(endpoint + this.$route.params.slug)
                .then((res) => {
                    this.project = res.data;
                })
                .catch(err => {
                    console.log(err)
                })
                .then()
        }
    },
    created() {
        this.getProject();
    }
}
</script>

<template>
    <ProjectCard v-if="project" :project="project" />
</template>

<style lang='scss' scoped>
/* style here */
</style>