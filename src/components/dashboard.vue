<template>
  <div>
      <h3>Top Heroes</h3>
        <div class="grid grid-pad">
            <div v-for="hero in heroes" :key="hero.id" class="col-1-4" @click="selected(hero)">
                <div class="module hero">
                    <h4>{{hero.name}}</h4>
                </div>
            </div>
            <hero-detail :hero="selectedHero" />
        </div>
  </div>
</template>

<script>
import HeroesList from './hero-list';
import heroDetail from './hero-detail';

export default {
    name: 'Dashboard',
    data() {
        return {
            heroes: [],
            selectedHero: {},
        };
    },
    components: {
        'hero-detail': heroDetail,
    },
    methods: {
        getHeroes() {
            this.heroes = HeroesList.slice(0, 4);
        },
        selected(hero){
            this.selectedHero = hero;
        }
    },
    mounted() {
        this.getHeroes();
    },
};
</script>

<style scoped>
[class*='col-'] {
    float: left;
    padding-right: 20px;
    padding-bottom: 20px;
}
[class*='col-']:last-of-type {
    padding-right: 0;
}
a {
    text-decoration: none;
}
*,
*:after,
*:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
h3 {
    text-align: center;
    margin-bottom: 0;
}
h4 {
    position: relative;
}
.grid {
    margin: 0;
}
.col-1-4 {
    width: 25%;
}
.module {
    padding: 20px;
    text-align: center;
    color: #eee;
    max-height: 120px;
    min-width: 120px;
    background-color: #607d8b;
    border-radius: 2px;
}
.module:hover {
    background-color: #eee;
    cursor: pointer;
    color: #607d8b;
}
.grid-pad {
    padding: 10px 0;
}
.grid-pad > [class*='col-']:last-of-type {
    padding-right: 20px;
}
@media (max-width: 600px) {
    .module {
        font-size: 10px;
        max-height: 75px;
    }
}
@media (max-width: 1024px) {
    .grid {
        margin: 0;
    }
    .module {
        min-width: 60px;
    }
}
</style>

