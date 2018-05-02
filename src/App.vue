<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{title}}</h1>
    <nav>
          <router-link to="/dashboard"> Dashboard </router-link>
          <router-link to="/heroes"> Heroes </router-link>
      </nav>
      <router-view></router-view>
  </div>
</template>

<script>
import Heroes from './components/app-heroes';
import Dashboard from './components/dashboard';

export default {
    name: 'App',
    data() {
        return { title: 'heroes tour' };
    },
    components: {
        'hero-dashboard': Dashboard,
        'app-heroes': Heroes,
    },
};
</script>

<style>
h1 {
  font-size: 1.2em;
  color: #999;
  margin-bottom: 0;
}
h2 {
  font-size: 2em;
  margin-top: 0;
  padding-top: 0;
}
nav a {
  padding: 5px 10px;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
  background-color: #eee;
  border-radius: 4px;
}
nav a:visited, a:link {
  color: #607D8B;
}
nav a:hover {
  color: #039be5;
  background-color: #CFD8DC;
}
nav a.active {
  color: #039be5;
}

</style>
