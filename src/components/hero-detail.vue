<template>
    <div>
        <h2>{{hero.name}} Details</h2>
        <div><span>id: </span>{{hero.id}}</div>
        <label> name:
            <input type="text" :value="hero.name" @input="heroChange($event)">
            <!-- <input type="text" v-model="hero.name"> -->
            <!-- <input type="text" :value="hero.name" @change="$emit('change', {id: hero.id, name:$event.target.value})" /> -->
            <!-- <input type="text" :value="hero.name" @change="$emit('update:name', $event.target.value)" /> -->
        </label>
    </div>
</template>

<script>
export default {
    name: 'HeroDetail',
    props: ['hero'],
    // props: {
    //     hero: Object,
    // },
    data() {
        return {};
    },
    // model: {
    //     prop: 'hero',
    //     event: 'change',
    // },
    methods: {
        heroChange(event) {
            // this.$emit('change', event.target.value);
            this.$emit('my-event', event.target.value);
        },
    },
};
</script>

<style scoped>

</style>
