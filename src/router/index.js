import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';

const routes = [
    {
        path: '/',
        name: 'HOME',
        component: HomeView
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});


export default router;
