<template>
  <div class="film">

    <div v-bind="film">
      <img :src="'https://image.tmdb.org/t/p/w500' + film.poster_path">
      <h4>{{ film.title }}</h4>
      <p>Vote-Average: {{ film.vote_average }}</p>
      <p>Release Date: {{ film.release_date }}</p>
      <p>Langugate: {{ film.original_language }}</p>
    </div>

    <md-button v-on:click="addFavoriteFilm" class="md-icon-button">
      <font-awesome-icon class="unmarked" :icon="['fas', 'heart']"/>
    </md-button>

  </div>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import Firebase from 'firebase'
  import {db} from '../main'

  export default {
    props: [
      'film'
    ],
    components: {
      FontAwesomeIcon
    },
    methods: {
      addFavoriteFilm () {
        const uid = Firebase.auth().currentUser.uid

        const userRef = db.ref('user/' + uid + '/favorite-films/' + this.film.id)
        userRef.set({film: this.film})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .film img {
    margin-top: 40px;
    width: 50%;
  }

  h4 {
    margin-top: 23px;
  }

  .unmarked {
    color: #adadad;
  }

  .marked {
    color: red;
  }
</style>
