import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    posts: [],
  },
  getters: {
    user: (state) => state.user,
    posts: (state) => state.posts,
  },
  mutations: {
    setUser: (state, user) => state.user = user,
    setPosts: (state, posts) => state.posts = posts,
  },
  actions: {
    setUser: ({ commit }, user) => commit('setUser', user),
    setPosts: ({ commit }, posts) => commit('setPosts', posts),
  },
  modules: {
  }
})
