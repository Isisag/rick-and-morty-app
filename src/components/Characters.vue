<template>
  <div>
    <h1>{{ characters.length }}</h1>
    <select v-model="filter_parameter" ref="seleccionado" placeholder="Selecciona !">
      <option disable >Seleciona</option>
      <option v-for="specie in (charactersSpecies)" v-bind:key="specie">{{specie}}</option>
    </select>

    <select v-model="types_parameter" ref="tipos" placeholder="Selecciona !">
      <option v-for="item in charactersTypes" v-bind:key="item">{{item}}</option>
    </select>

    <div class="container">
      <div v-for="item in characters" :key="item.id" class="tarjeta">
        <h3>{{ item.name }}</h3>
        <span>{{ item.species }}</span>
        <img :src="item.image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import "../style/index.scss";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "CharactersComponent",
  // props: {
  //   msg: String,
  // },

  data() {
    return {
      filter_parameter: "",
      types_parameter: "",
      characters: [],
      charactersSpecies: [],
      charactersTypes: [],
      seleccionado: '',
      tipos: ''
    };
  },
  async mounted() {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    const characters = data.results;
    this.characters = characters;
    const species = characters.map((character) => character.species)
    this.charactersSpecies = new Set(species)

    const types = characters.map((character) => character.type)
    this.charactersTypes = new Set(types)
  },
  watch:{
    filter_parameter:{
      handler(){
        this.seleccionado = this.$refs.seleccionado.value;
        this.filterBy(this.filter_parameter)
      },
      types_parameter:{
        handler(){
          console.log('typess')
          this.tipos = this.$refs.tipos.value;
          this.filterBy(this.types_parameter)
        }
      }
    }
  },
  methods: {
    ...mapMutations(["LOAD_CHARACTERS", "FILTER_DATA"]),
    ...mapActions(["GET_CHARACTERS"]),
    ...mapGetters(["quantity"]),

    filterBy(type) {
      console.log(this.characters, 'characters!')
      // if(type === 'Selecciona'){
      //   return this.characters
      // }
      const filtered = this.characters.filter((character) => character.species === type);

      console.log(filtered,'filtered')
      console.log(this.characters, 'characters!')
      console.log(type,'type');
      this.characters = filtered;
    },
  },
  computed: {
    // ...mapState(["characters"]),
  },
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
