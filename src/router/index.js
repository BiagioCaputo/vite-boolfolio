
import { createRouter, createWebHistory } from "vue-router";


//Pagine da utilizzare per il routing
import HomePage from "../components/pages/HomePage.vue";



// Rotte
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
    ]
});




export { router }