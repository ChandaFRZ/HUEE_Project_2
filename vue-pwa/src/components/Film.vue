<template>
  <div class="film">

    <div v-bind="film">
      <img :src="'https://image.tmdb.org/t/p/w500' + film.poster_path">
      <h4>{{ film.title }}</h4>
      <p>Vote-Average: {{ film.vote_average }}</p>
      <p>Release Date: {{ film.release_date }}</p>
      <p>Langugate: {{ film.original_language }}</p>
    </div>

  </div>
</template>

<script>

  export default {
    props: [
      'film'
    ]
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
</style>
