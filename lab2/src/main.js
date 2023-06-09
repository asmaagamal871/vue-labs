import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory,createRouter } from 'vue-router';
import allUsersApp from './components/pages/allUsers.vue';
import userdetailsApp from './components/pages/userDetails.vue';
import errorApp from './components/pages/errorPage.vue';
import register from './components/pages/Registration.vue';
import updateUserApp from './components/pages/updateUser.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const routes = [
    {
        path:'/',component:allUsersApp,alias:'/users',
    },
    {
        path:'/users/:id',component:userdetailsApp
    },
    {
        path:'/users/update/:id',component:updateUserApp
    },
    {
        path:'/register',component:register
    },
    {
        path:'/:NotFound(.*)*',component:errorApp,meta:{hideNavbar:true}
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')

