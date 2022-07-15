<template>
   <nav class="navbar-container">
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link> 
    <router-link to="/characters">Characters</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style lang="scss">
.navbar-container{
    display: flex;
    justify-content: space-around;
    background-color: pink;
    padding: 2rem;
}
</style>