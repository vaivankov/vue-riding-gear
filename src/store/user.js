import * as firebase from 'firebase'

class User {
  constructor(id) {
    this.id = id
  }
}

export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state, payLoad) {
      state.user = payLoad
    }
  },
  actions: {
    async registerUser({ commit }, { email, password }) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await firebase.default.auth()
          .createUserWithEmailAndPassword(email, password)
        commit('setUser', new User(user.user.uid))
        commit('setLoading', false)
      } catch (err) {
        commit('setLoading', false)
        commit('setError', err.message)
        throw err
      }
    },
    async userLogin({ commit }, { email, password }) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await firebase.default.auth()
          .signInWithEmailAndPassword(email, password)
        commit('setUser', new User(user.user.uid))
        commit('setLoading', false)
      } catch (err) {
        commit('setLoading', false)
        commit('setError', err.message)
        throw err
      }
    },
    autoLoginUser({ commit }, payLoad) {
      commit('setUser', new User(payLoad.uid))
    },
    userLogout({ commit }) {
      firebase.default.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    isUserLoggedIn(state) {
      return state.user !== null
    }
  },
}
