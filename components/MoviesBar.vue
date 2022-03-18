

<template>
    <main v-if="!loading">

        <div class="search-wrapper p-4 mb-10 text-center">
            <input type="text" v-model="search" placeholder="Search by name..."/>
        </div>

        <div class="wrapper">
            <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                <li class="relative" v-for="(movie) in filteredList" :key="movie.id" >
                    <div class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                    <img class="object-cover flex align-center center" :src="`${base_url}${movie.poster_path}`" :alt="movie.title">
                    </div>
                    <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{{ movie.title }}</p>
                    <p class="block mt-2 text-sm font-medium text-gray-500 pointer-events-none">Release Date: {{ movie.release_date }}</p>
                </li>
            </ul>
        </div>

    </main>

    <main v-else class="flex flex-col align-center justify-center text-center">
        <div class="text-gray-500 text-3xl mt-10 mb-6">
            Loading...
        </div>
        <img :src="loadingImage" class="w-100 m-auto"/>
    </main>
</template>

<script>
export default {
    name: 'Movies',
    data() {
        return {
            loading: true,
            search: '',
            base_url: 'https://image.tmdb.org/t/p/original',
            movies: [],
            loadingImage: require('../assets/loading.gif')
        }
    },
    methods: {
        async fetchNowPlaying() {
            const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.tmdbKey}&language=en-US&page=1`)
            return await res.json();
        }
    },
    async created() {
        const data = await this.fetchNowPlaying();
        this.movies = data.results;
        this.loading = false
        console.log(data)
    },
    computed: {
        filteredList() {
            return this.movies.filter(movie => {
                return movie.title.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }
}
</script>