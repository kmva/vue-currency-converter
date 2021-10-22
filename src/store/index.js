import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    currencies: []
  },
  getters: {
    getCurrencies(state) {
      return state.currencies
    }
  },
  mutations: {
    setCurrencies(state, payload) {
      state.currencies = payload.currencies
    }
  },
  actions: {
    async getCurrencies({commit}) {
      try{
        const data = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
        commit('setCurrencies', {currencies: data.data.Valute});
      } catch {
        throw new Error()
      }
    }
  },
  modules: {},
});
