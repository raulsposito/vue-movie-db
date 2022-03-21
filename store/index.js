import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default () => new Vuex.Store({
    state: () => ({
        modalOpen: false,
        selectedMovie: null,
    }),
    mutations: {
        toggleModalOpen(state) {
            state.modalOpen = !state.modalOpen
        },
        setMovie(state, movie) {
            state.selectedMovie = movie
        }
    }
})