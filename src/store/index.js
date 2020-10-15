import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: { images: [], searchText: '' },
    mutations: {
        setImages(state, payload) {
            state.images = payload
        },
        setSearchText(state, payload) {
            state.searchText = payload
        }
    },
    actions: {},
    modules: {}
});