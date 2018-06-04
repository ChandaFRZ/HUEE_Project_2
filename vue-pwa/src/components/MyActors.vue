<template>
    <div class="myActors section">

        <h2>My Actors</h2>

        <div v-if="limit">
            <Actor v-for="actorid in actorids.slice(0,3)" :actorid="actorid" v-bind:key="actorid"></Actor>
        </div>
        <div v-else>
            <Actor v-for="actorid in actorids" :actorid="actorid" v-bind:key="actorid"></Actor>
        </div>


        <button @click="showMore" v-if="limit === true">more</button>
    </div>

</template>

<script>
    import Actor from './partials/Actor.vue'
    export default {
      name: 'myActors',
        data() {
            return {
                actorids: [1, 2, 3, 4, 5, 6]
            }
        },
        props: {
            limit: Boolean,
        },
        components: {
            Actor
        },
        methods: {
          //TODO: get all "my actors" from the db and load movies/some information from my actor --> save actor ids in 'actorids' array
            showMore: function () {
                this.$router.push('myactors');
            }
        }
    }
</script>