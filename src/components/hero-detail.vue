<template>
    <div>
        <h2>{{hero.name}} Details</h2>
        <div><span>id: </span>{{hero.id}}</div>
        <label> name:
            <input type="text" v-model="hero.name">
        </label>
    </div>
</template>

<script>
export default {
    name: 'HeroDetail',
    props: {
        hero: Object,
    },
    data() {
        return {};
    },
    methods: {},
};
</script>

<style scoped>

</style>
