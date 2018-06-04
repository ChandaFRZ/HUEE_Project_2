<template>
    <div class="actor">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" :src="imageUrl" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ title }} {{ actorid }}</h5>
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

        name: 'actor',
        data() {
            return {
                title: 'default title',
                imageUrl: 'http://via.placeholder.com/350x150',
                description: ' Some quick example text to build on the card title and make up the bulk of the card\'s content',
                starText: 'Star/Unstar'
            }
        },
        props: {
            actorid: Number,
        },
        methods: {
            star: function () {
                console.log('star and unstar function')
            },
            getMoviesForActor: function (actorid) {
                //TODO: load movie from db and set title, image etc
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .actor {
        display: inline-block;
    }
</style>
