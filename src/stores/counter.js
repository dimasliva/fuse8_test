import { defineStore } from 'pinia'

export const useJokesStore = defineStore('jokes', {
  state: () => ({
    jokes: {},
  }),
  actions: {
    setJokes(state) {
      this.jokes = state
    },
  },
})