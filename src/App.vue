<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{title}}</h1>
    <app-heroes />
    <router-view/>
  </div>
</template>

<script>
import HeroDetail from './components/hero-detail';
import AppHeroes from './components/app-heroes';

export default {
    name: 'App',
    data() {
        return { title: 'heroes tour' };
    },
    components: {
        'hero-detail': HeroDetail,
        'app-heroes': AppHeroes,
    },
};
</script>

<style>

</style>
