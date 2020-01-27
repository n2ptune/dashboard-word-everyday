/* eslint-disable no-unused-vars */
import firebase from '@/plugins/firebase'
import axios from 'axios'
import base from '@/helpers/base-url'

export default {
  state: {
    account: null
  },
  mutations: {
    setAccount(state, account) {
      state.account = account
    }
  },
  getters: {
    getAccount(state) {
      return state.account || false
    },
    getUserID(state) {
      return state.account.email.split('@')[0]
    }
  },
  actions: {
    async login({ commit }, { email, pw }) {
      try {
        const account = await firebase
          .auth()
          .signInWithEmailAndPassword(email, pw)
        const token = await account.user.getIdToken()
        const { data: user } = await axios.post(
          '/credentials/auth',
          { token },
          { baseURL: base.url }
        )
        commit('setAccount', user)
      } catch (e) {
        throw e
      }
    },
    async loginWithToken({ commit }, token) {
      try {
        const { data: user } = await axios.post(
          '/credentials/auth',
          { token },
          { baseURL: base.url }
        )

        commit('setAccount', user)
      } catch (e) {
        throw e
      }
    }
  }
}
