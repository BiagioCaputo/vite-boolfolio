<script>
export default {
    name: 'ProjectCard',
    props: { project: Object },
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
    <div class="col-4">
        <div class="card mb-3">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ getAbstract }}</p>
                <p class="card-text"><small class="text-body-secondary">{{ getDate }}</small></p>
            </div>
        </div>
    </div>
</template>