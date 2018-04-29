<template>
    <div>
        <h2>{{hero.name}} Details</h2>
        <div><span>id: </span>{{hero.id}}</div>
        <label> name:
            <input type="text" :value="hero.name" @input="heroChange($event)">
        </label>
    </div>
</template>

<script>
export default {
    name: 'HeroDetail',
    props: ['hero', 'name'],
    data() {
        return {};
    },
    model: {
        prop: 'name',
        event: 'change',
    },
    methods: {
        heroChange(event) {
            this.$emit('change', event.target.value);
            this.$emit('my-event', event.target.value);
        },
    },
};
</script>

<style scoped>

</style>
