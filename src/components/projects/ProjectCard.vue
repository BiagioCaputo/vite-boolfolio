<script>
export default {
    name: 'ProjectCard',
    props: { project: Object, isProjectShow: Boolean },
    computed: {
        //funzione per ricavare l'abstract dalle description dei projects
        getAbstract() {
            if (this.project.description.length < 250) {
                return this.project.description
            }
            const abstract = this.project.description.slice(0, 250);
            return abstract + '...';
        },
        //funzione che formatta la data di creazione di un post 
        getDate() {
            const date = new Date(this.project.created_at);
            let day = date.getDate();
            let month = date.getMonth();
            const year = date.getFullYear();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;
            if (hours < 10) hours = '0' + hours;
            if (minutes < 10) minutes = '0' + minutes;
            return `${day}/${month}/${year} alle ${hours}:${minutes}`
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="card mb-3">
            <img @if="project.image" :src="project.image" class="card-img-top" :alt="project.title">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <RouterLink v-if="!isProjectShow" class="btn btn-primary" :to="`/projects/${project.slug}`"><i
                            class="fa-solid fa-eye"></i></RouterLink>
                </div>
                <p class="card-text">{{ isProjectShow ? project.description : getAbstract }}</p>
                <div v-if="project.technologies?.length">
                    <span v-for="technology in project.technologies" :key="technology.id"
                        class="badge rounded-pill me-2 my-3" :class="`text-bg-${technology.color}`">
                        {{ technology.label }}</span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="card-text"><small class="text-body-secondary">{{ getDate }}</small></p>
                    <span v-if="project.type" class="badge" :style="{ backgroundColor: project.type.color }">
                        {{ project.type.label }}</span>
                </div>


            </div>
        </div>
    </div>
</template>