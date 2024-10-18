import { createStore } from 'vuex'

export const vuexStore = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state: { count: number }) {
      state.count++
    },
    decrement(state: { count: number }) {
      state.count--
    }
  }
})
