<template>
  <div>
    <input type="text" />
    <div>
      {{ characters }}
    </div>
    <button v-on:click="GET_CHARACTERS">click 1</button>
    <button v-on:click="justShow">click</button>
  </div>
</template>

<script>
import "../style/index.scss";

export default {
  name: "CharactersComponent",
  props: ["characters"],
  // props: {
  //   msg: String,
  // },
  methods: {
    showCharacters() {
      return this.$store.dispatch("GET_CHARACTERS");
    },
    justShow(){
          console.log(this.characters)
    }
  },
};
</script>

<style lang="sass"></style>
