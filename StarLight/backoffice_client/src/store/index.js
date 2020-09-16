import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';

const store = new Vuex.store({
  state,
  mutations,
});

export default store;
