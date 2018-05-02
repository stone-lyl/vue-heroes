import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './../components/dashboard';
import Heroes from './../components/app-heroes';
import HeroDetail from './../components/hero-detail';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/dashboard', component: Dashboard },
        { path: '/heroes', component: Heroes },
        { path: '/detail/:id', component: HeroDetail, name: 'detail' },
    ],
});
