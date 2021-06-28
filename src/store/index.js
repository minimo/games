import Vue from 'vue'
import Vuex from 'vuex'
import state from "@/store/state";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
  },
  plugins: [createPersistedState({storage: window.sessionStorage})]
})
