import axios from '@/libs/axios';

export default {
  namespaced: true,
  state: {
    mainSlides: [],
    mainTabs: [],
    promoList: [],
  },
  mutations: {
    setMainSlides(state, slides) {
      state.mainSlides = slides;
    },
    setMainTabs(state, tabs) {
      state.mainTabs = tabs;
    },
    setPromoList(state, list) {
      state.promoList = list;
    },
  },
  actions: {
    async fetchMainSlides({ commit }) {
      const res = await axios.get('/api/main-slides');
      commit('setMainSlides', res.data);
    },
    async fetchMainTabs({ commit }) {
      const res = await axios.get('/api/main-tabs');
      commit('setMainTabs', res.data);
    },
    async fetchPromoList({ commit }) {
      const res = await axios.get('/api/promo-list');
      commit('setPromoList', res.data);
    },
  },
};

