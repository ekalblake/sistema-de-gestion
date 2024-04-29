import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import CourseView from '@/views/CourseView.vue';

const routes = [
    {
        path: '/',
        name: 'HOME',
        component: HomeView
    },
    {
        path: '/courses',
        name: 'COURSES',
        component: CourseView
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});


export default router;
