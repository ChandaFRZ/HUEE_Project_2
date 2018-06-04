<template>
    <div class="movie">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" :src="imageUrl" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ title }} {{ movieid }}</h5>
                <p class="card-text">
                    {{ description }}
                </p>
                <button @click="star">{{ starText }}</button>
            </div>
        </div>

    </div>
</template>

<script>

    export default {

        name: 'movie',
        data() {
            return {
                title: 'default title',
                imageUrl: 'http://via.placeholder.com/350x150',
                description: ' Some quick example text to build on the card title and make up the bulk of the card\'s content',
                starText: 'Star/Unstar'
            }
        },
        props: {
            movieid: String,
        },
        methods: {
            star: function () {
                console.log('star and unstar function')
            },
            getMovie: function (movieId) {
                //TODO: load movie from db and set title, image etc
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

    .movie {
        display: inline-block;
    }
</style>
