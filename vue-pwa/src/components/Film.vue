<template>
  <div class="film">

    <div v-bind="film">
      <img :src="'https://image.tmdb.org/t/p/w500' + film.poster_path">
      <h4>{{ film.title }}</h4>
      <p>Vote-Average: {{ film.vote_average }}</p>
      <p>Release Date: {{ film.release_date }}</p>
      <p>Langugate: {{ film.original_language }}</p>
    </div>

    <md-button class="md-icon-button">
      <font-awesome-icon class="unmarked" :icon="['fas', 'heart']"/>
    </md-button>

  </div>
</template>

<script>
  import FontAwesome from '@fortawesome/vue-fontawesome'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import {faUser} from '@fortawesome/fontawesome-free-solid'

  export default {
    props: [
      'film'
    ],
    components: {
      FontAwesomeIcon
    },
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
