
import { createRouter, createWebHistory } from "vue-router";


//Pagine da utilizzare per il routing
import HomePage from "../components/pages/HomePage.vue";
import NotFoundPage from "../components/pages/NotFoundPage.vue";
import ProjectShowPage from "../components/pages/ProjectShowPage.vue";
import TypeProjectsPage from "../components/pages/TypeProjectsPage.vue";
import TechnologyProjectsPage from "../components/pages/TechnologyProjectsPage.vue";



// Rotte
const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', component: HomePage },

        { path: '/projects/:slug', component: ProjectShowPage, name: 'project-show' },
        { path: '/types/:slug/projects', component: TypeProjectsPage, name: 'type-projects' },
        { path: '/technologies/:slug/projects', component: TechnologyProjectsPage, name: 'technology-projects' },


        { path: '/not-found', component: NotFoundPage, name: 'not-found' },
        { path: '/:pathMatch(.*)*', redirect: 'not-found' },
    ]
});




export { router }