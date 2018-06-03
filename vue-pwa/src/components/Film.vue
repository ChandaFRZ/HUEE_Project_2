<template>
  <div class="film">
    <div v-bind="films">
      <img :src="films.Poster">
      <h4>Name: {{ films.Title }}</h4>
      <h4>Actors: {{ films.Actors }}</h4>
      <h4>Film IMDB  Score: {{ films.imdbRating }}</h4>
      <h4>Country: {{ films.Country }}</h4>
      <h4>Year: {{ films.Year }}</h4>
      <h4>Director: {{ films.Director }}</h4>
      <h4>Genre: {{ films.Genre }}</h4>
      <h4>Writer: {{ films.Writer }}</h4>
    </div>

  </div>
</template>

<script>

  export default {
    props: [
      'films'
    ]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .film img {
    margin-top: 40px;
  }

  h4 {
    margin-top: 23px;
  }
</style>
