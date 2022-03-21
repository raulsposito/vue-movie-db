<template>
    <div v-if="this.modalOpen" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
<!--  -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <!--
        -->
        <div class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
        <div>
            <!-- Image = base_url + backdrop_path -->
            <div class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-red-500 overflow-hidden">
                <img class="object-cover flex align-center center" :src="`${base_url}${this.selectedMovie.backdrop_path}`" :alt="this.selectedMovie.title">
            </div>
            <div class="mt-3 text-center sm:mt-5">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">{{ this.selectedMovie.title }}</h3>
            <div class="mt-2">
                <p class="text-sm text-gray-500">{{ this.selectedMovie.overview }}</p>
            </div>
            </div>
        </div>
        <div class="mt-5 sm:mt-6">
            <button @click="handleOpen" type="button" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-700 text-base font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm">Go back to dashboard</button>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            base_url: 'https://image.tmdb.org/t/p/original',
        }
    },
    props: {
        title: {
            type: String,
            default: 'Movie Title',
        }
    },
    computed: {
        ...mapState(["modalOpen", "selectedMovie"])
    },
    methods: {
        handleOpen() {
            this.$store.commit("toggleModalOpen")
            this.$store.commit("setMovie", null)
        }
    }
}
</script>