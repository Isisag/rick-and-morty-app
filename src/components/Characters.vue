<template>
  <div>
    <h1>{{ characters.length }}</h1>
    <button @click="GET_CHARACTERS">click!</button>
    <button @click="FILTER_DATA('Human')">Humano</button>
    <button @click="FILTER_DATA('Alien')">Alien</button>
    <div class="container">
        <div v-for="item in characters" :key="item.id" class="tarjeta">
        <h3>{{ item.name }}</h3>
        <span>{{ item.species }}</span>
        <img :src="item.image" alt="" />
    </div>
    </div>
    
    <select
      name=""
      id=""
      v-model="filter_parameter"
      @change="filter_parameter = item.species"
    >
      <option value="" v-for="item in characters" :key="item.id">
        {{ item.species }}
      </option>
    </select>
  </div>
</template>

<script>
import "../style/index.scss";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "CharactersComponent",
  // props: {
  //   msg: String,
  // },
  data() {
    return {
      filter_parameter: "",
    };
  },
  methods: {
    // showCharacters() {
    //   return this.$store.dispatch("GET_CHARACTERS");
    // },
    // justShow(){
    //       console.log(this.characters)
    // }
    ...mapMutations(["LOAD_CHARACTERS", "FILTER_DATA"]),
    ...mapActions(["GET_CHARACTERS"]),
    ...mapGetters(["quantity"]),
  },
  computed: {
    ...mapState(["characters"]),
  },
  watch: {},
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
 
}
.tarjeta {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: darkseagreen;
  margin: 1rem 0rem;
   /* width: 230px;
  height: 230px; */
}
</style>
