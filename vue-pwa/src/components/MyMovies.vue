<template>
    <div class="myMovies section">

        <h2>My Movies</h2>

        <div v-if="limit">
            <Movie v-for="movieid in movieids.slice(0,3)" :movieid="movieid"  v-bind:key="movieid"></Movie>
        </div>
        <div v-else>
            <Movie v-for="movieid in movieids" :movieid="movieid"  v-bind:key="movieid"></Movie>
        </div>


        <button @click="showMore" v-if="limit === true">more</button>
    </div>

</template>

<script>
    import Movie from './partials/Movie'
    export default {
      name: 'myMovies',
        data() {
            return {
                movieids: [1, 2, 3, 4, 5, 6]
            }
        },
        props: {
            limit: Boolean,
        },
        components: {
            Movie
        },
        methods: {
            //TODO: get all "my movies" from the db and load movies with this ids --> save movie ids in 'movieids' array
            showMore: function () {
                this.$router.push('mymovies');
            }
        }
    }
</script>