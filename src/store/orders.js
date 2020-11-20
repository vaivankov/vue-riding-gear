import firebase from 'firebase'

class Order {
  constructor(params, key) {
    this.name = params.name || ""
    this.phone = params.phone || ""
    this.additional = params.additional
    this.orderId = key || ""
    this.adId = params.adId || ""
    this.userId = params.userId || null
    this.done = params.done || false
  }
}

export default {
  state: {
    orders: []
  },
  mutations: {
    loadOrders(state, payload) {
      state.orders = payload
    }
  },
  actions: {
    async createOrder({ commit, getters }, params) {
      const order = new Order(params)

      commit('clearError')

      try {
        await firebase.database()
          .ref(`/users/${getters.user.id}/orders`).push(order)
      } catch (error) {
        commit('setError', error.message)
        throw error
      }
    },
    async fetchOrders({ commit, getters }) {
      commit('setLoading', true)
      commit('clearError')

      const resultOrders = []

      try {
        const firebaseValue = await firebase.database()
          .ref(`/users/${getters.user.id}/orders`).once('value')
        const orders = firebaseValue.val()

        if (orders) {
          Object.keys(orders).forEach(key => {
            const order = orders[key]
            resultOrders.push(
              new Order(order, key)
            )
          })
        }

        commit('loadOrders', resultOrders)
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
      }
    },
    async markOrderDone({ commit, getters }, payload) {
      commit('clearError')
      try {
        await firebase.database()
          .ref(`/users/${getters.user.id}/orders`)
          .child(payload).update({
            done: true
          })
      } catch (error) {
        commit('setError', error.message)
        throw error
      }
    }
  },
  getters: {
    doneOrders(state) {
      return state.orders.filter(order => order.done)
    },
    undoneOrders(state) {
      return state.orders.filter(order => !order.done)
    },
    orders(state, getters) {
      return getters.undoneOrders.concat(getters.doneOrders)
    }
  }
}
