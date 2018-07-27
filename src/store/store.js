import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        count: 25
      },
      getters: {
          getcount(state){
              return state.count
          }
      },
      mutations: {
        addstore (state) {
          state.count++
        }
      },
      actions: {
        addstore ({commit}) {
          commit('addstore')
        }
      }
})