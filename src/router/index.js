
import { createRouter, createWebHistory } from "vue-router";


//Pagine da utilizzare per il routing
import HomePage from "../components/pages/HomePage.vue";
import NotFoundPage from "../components/pages/NotFoundPage.vue";
import ProjectShowPage from "../components/pages/ProjectShowPage.vue";



// Rotte
const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', component: HomePage },
        { path: '/projects/:slug', component: ProjectShowPage, name: 'project-show' },
        { path: '/not-found', component: NotFoundPage, name: 'not-found' },
        { path: '/:pathMatch(.*)*', redirect: 'not-found' },
    ]
});




export { router }