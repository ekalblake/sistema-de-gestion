import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import CourseView from '@/views/CourseView.vue';
import StudentView from '@/views/StudentView.vue';

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
    },
    {
        path: '/students',
        name: 'STUDENTS',
        component: StudentView
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});


export default router;
