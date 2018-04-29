<template>
<div>
    <h2>My Heroes</h2>
    <ul class="heroes" >
        <li v-for="hero in heroes" :key="hero.id" @click="select(hero)">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
    </ul>
    <hero-detail
    :hero="selectedHero"
    v-on:my-event="listen($event)" />
    <!-- <hero-detail :hero="selectedHero"/> -->
    <!-- <hero-detail v-model="selectedHero"/> -->
    <!-- <hero-detail v-bind.sync="selectedHero" /> -->
</div>
</template>

<script>
import Heroes from './hero-list';
import heroDetail from './hero-detail';

export default {
    name: 'AppHeroes',
    data() {
        return {
            heroes: Heroes,
            selectedHero: {},
        };
    },
    methods: {
        select(hero) {
            this.selectedHero = hero;
            console.log('select: ', this.selectedHero);
        },
        listen(event) {
            console.log(event, 'vent');
            this.selectedHero.name = event;
        },
    },
    components: {
        'hero-detail': heroDetail,
    },
};
</script>

<style scoped>
/* HeroesComponent's private CSS styles */
.selected {
    background-color: #cfd8dc !important;
    color: white;
}
.heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
}
.heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #eee;
    margin: 0.5em;
    padding: 0.3em 0;
    height: 1.6em;
    border-radius: 4px;
}
.heroes li.selected:hover {
    background-color: #bbd8dc !important;
    color: white;
}
.heroes li:hover {
    color: #607d8b;
    background-color: #ddd;
    left: 0.1em;
}
.heroes .text {
    position: relative;
    top: -3px;
}
.heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607d8b;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: 0.8em;
    border-radius: 4px 0 0 4px;
}
</style>
