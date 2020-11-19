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
    registerUser({ commit }, { email, password }) {
      firebase
        .default.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          commit('setUser', new User(user.user.uid))
        })
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  },
}
