<template>
  <div class="container">
    <nav class="navbar-container">
      <!-- <img src="https://media.giphy.com/media/QyKKSidc5rd0Y1Iw3z/giphy.gif" alt=""> -->
      <div class="logo-container">
        <img
          class="rick"
          src="https://media.giphy.com/media/9JwUhPDEGmhbWgCMEZ/giphy.gif"
          alt=""
        />
        <img
          class="morty"
          src="https://media.giphy.com/media/2cehgMhmxSp0LFKAws/giphy.gif"
          alt=""
        />
      </div>
      <router-link class="router-link" to="/">
        <h3>Home</h3>
        </router-link>
      <router-link class="router-link" to="/about">
        <h3>About</h3>
        </router-link>
      <router-link class="router-link" to="/characters">
        <h3>Personajes</h3>
        </router-link>
      <router-link class="router-link" to="/characters">
        <h3>Temporadas</h3>
        </router-link>
      <!-- <input type="search" /> -->
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss">
.navbar-container {
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url("../../assets/fondo-estrellas.png");

  .router-link{
    color: var(--green-principal);
    text-transform: uppercase;
    text-decoration: none;

    &:visited{
      color: var(--green-principal);
    }

    &:hover{
      color: var(--ligth-green);
    }
  }

}

.logo-container {
  margin: 0;
  padding: 0;
}
.rick {
  width: 60px;
  height: 60px;
}
.morty {
  width: 40px;
  height: 40px;
}
</style>
