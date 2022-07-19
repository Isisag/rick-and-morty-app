import { createStore } from 'vuex'

export default createStore({
  state: {
    seasons: [],
    episodes: [],
    characterName: '',
    characters: [],
    saludos: ['hola','hello',]
  },
  getters: {
    quantity: (state) => {  return state.characters.length  }
  },
  mutations: {
    LOAD_CHARACTERS: (state, payload) => { state.characters = payload },
    // LOAD_CHARACTERS_NAMES: (state, payload) => { state.characterName = payload },
    LOAD_CHARACTERS_EPISODES: (state, payload) => { state.episodes = payload },
    FILTER_DATA: (state, payload) => {
      const filtered = state.characters.filter((character) => character.species === payload )
      state.characters = filtered;
    }
  },
  actions: {
    // GET_CHARACTERS: ({commit}) => {
    //   fetch('https://rickandmortyapi.com/api/character')
    //   .then((res) => {
    //     res.json()
    //     console.log(res)
    //     console.log(res.json())
    //   })
    //   .then((response) =>{
    //       const characters = response.results.map((ele) => ele)
    //       console.log(characters)
    //       commit("LOAD_CHARACTERS", characters)
    //       // const episodes = response.results.map((ele) => ele.episode)
    //       // console.log(episodes, characters)
    //       // commit("LOAD_CHARACTERS_EPISODES",episodes)
    //   })
    //   .catch((err) => console.log(err))
    // }
    GET_CHARACTERS: async ({commit}) => {
          const res = await fetch('https://rickandmortyapi.com/api/character')
          const data = await res.json()
          const characters = data.results
          console.log(data)
          console.log(characters)
          commit("LOAD_CHARACTERS", characters)
    },
    GET_FILTERED_DATA: ({commit}) => {
      commit("FILTER_DATA")
    }
  },
  modules: {
  }
})
