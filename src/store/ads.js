import firebase from "firebase";

class Ad {
  constructor(params) {
    this.title = params.title || ''
    this.description = params.description || ''
    this.ownerId = params.ownerId || ''
    this.previewImage = params.previewImage || ''
    this.fullImage = params.fullImage || ''
    this.promo = params.promo || false
    this.price = params.price || '$'
    this.id = params.id || null
  }
}

export default {
  state: {
    ads: [],
  },
  mutations: {
    createAd(state, payLoad) {
      state.ads.push(payLoad)
    },
    loadAds(state, payLoad) {
      state.ads = payLoad
    },
    updateAd(state, payLoad) {
      const ad = state.ads.find((a) => { return a.id === payLoad.id })
      ad.title = payLoad.title
      ad.description = payLoad.description
      ad.price = payLoad.price
      ad.previewImage = payLoad.previewImage
      ad.fullImage = payLoad.fullImage
    }
  },
  actions: {
    async createAd({ commit, getters }, payLoad) {
      commit('clearError');
      commit('setLoading', true);
      try {
        let newAd = new Ad(payLoad)

        newAd.ownerId = getters.user.id

        const ad =
          await firebase.database()
            .ref('ads')
            .push(newAd)

        newAd.id = ad.key

        commit('setLoading', false);
        commit('createAd', newAd)
      } catch (err) {
        commit('setError', err.message);
        commit('setLoading', false);
        throw err
      }
    },
    async fetchAds({ commit }) {
      commit('clearError')
      commit('setLoading', true)
      const resultAds = []
      try {
        const firebaseValue =
          await firebase.database().ref('ads').once('value')
        const ads = firebaseValue.val()

        Object.keys(ads).forEach((key) => {
          const ad = ads[key]
          resultAds.push(new Ad(ad))
        })

        commit('loadAds', resultAds);
        commit('setLoading', false);
      } catch (err) {
        commit('setError', err.message);
        commit('setLoading', false);
        throw err
      }
    },
    async updateAd({ commit }, payLoad) {
      commit('clearError')
      commit('setLoading', true)
      try {
        await firebase.database().ref('ads')
          .child(payLoad.id).update(payLoad)
        commit('updateAd', payLoad);
        commit('setLoading', false);
      } catch (err) {
        commit('setError', err.message);
        commit('setLoading', false);
        throw err
      }
    }
  },
  getters: {
    ads(state) {
      return state.ads
    },
    promoAds(state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds(state, getters) {
      return state.ads.filter((ad) => { return ad.ownerId === getters.user.id })
    },
    adById(state) {
      return (adId) => {
        return state.ads.find((ad) => ad.id === adId)
      }
    }
  }
}
