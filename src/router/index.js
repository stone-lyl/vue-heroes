import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './../components/dashboard';
import Heroes from './../components/app-heroes';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/dashboard', component: Dashboard },
        { path: '/heroes', component: Heroes },
    ],
});
