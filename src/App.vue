<template>
  <div class="app">
    <NavBar />
  </div>
</template>

<script>
// import "./style/index.scss"
// import style from './style/index.scss'
import NavBar from "./components/navbar/index.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: fit-content;
}

.app {
  margin: 0;
  padding: 0;
  height: fit-content;
}

/* nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
