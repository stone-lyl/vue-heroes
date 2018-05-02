<template>
    <div>
        <h2>{{selectedHero.name}} Details</h2>
        <div><span>id: </span>{{selectedHero.id}}</div>
        <label> name:
            <input type="text" v-model="selectedHero.name">
        </label>
    </div>
</template>

<script>
import heroList from './hero-list';

export default {
    name: 'HeroDetail',
    props: ['hero'],
    data() {
        return {
            selectedHero: {},
        };
    },
    methods: {
        filterId() {
            // this.id = this.$route.params.id.slice(1);
            console.log(this.$route.params.id, 'detail id', this.selectedHero);
            this.selectedHero = heroList.find(v => v.id === this.$route.params.id);    
        },
    },
    mounted() {
        console.log(this.hero);
        if(this.$route.params.id)
        this.filterId();
        else this.selectedHero = this.hero;
        console.log(this.selectedHero, 'hero detail');
    },
};
</script>

<style scoped>

</style>
