import { createStore } from 'vuex'

export default createStore({
  state: {
    seasons: [],
    episodes: [],
    characterName: '',
    characters: []
  },
  getters: {
    quantity: (state) => {  state.characters.length  }
  },
  mutations: {
    LOAD_CHARACTERS: (state, payload) => { state.characters = payload },
    LOAD_CHARACTERS_NAMES: (state, payload) => { state.characterName = payload },
    LOAD_CHARACTERS_EPISODES: (state, payload) => { state.episodes = payload }
  },
  actions: {
    GET_CHARACTERS: (state) => {
      fetch('https://rickandmortyapi.com/api/character')
      .then((res) => {
        res.json()
      })
      .then((response) =>{
          const characters = response.results.map((ele) => ele)
          const episodes = response.results.map((ele) => ele.episode)
          state.commit("LOAD_CHARACTERS",characters)
          state.commit("LOAD_CHARACTERS_EPISODES",episodes)
      })
      .catch((err) => console.log(err))
    }
  },
  modules: {
  }
})
