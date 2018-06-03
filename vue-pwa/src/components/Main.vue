<template>
  <div class="hello">
    <Search v-on:SearchRequested="handleSearch"></Search>

    <ul v-if="popularFilms.length > 0">

      <li v-for="film in popularFilms">
        <film v-bind:film="film"></film>
      </li>

    </ul>
    <!--<film v-bind:films="films"></film>-->
    <button v-on:click="logout">Logout</button>

  </div>
</template>

<script>
  import MessageList from './MessageList'
  import firebase from 'firebase'
  import Film from './Film'
  import Search from './Search'

  export default {

    components: {
      MessageList, Film, Search
    },
    data() {
      return {
        films: [],
        popularFilms: [],
        apiKey: '49b8bfd',
        movieDbApiKeyV3: '9044afcc39f9e991ed70c79944242022'
      }
    },
    methods: {
      handleSearch(query) {
        this.films = []

          fetch('http://www.omdbapi.com/?t=' + query + '&apikey=' + this.apiKey)
            .then((res) => {
              return res.json()
            })
            .then((res) => {
              this.films = res;
              console.log(res);
            })
      },
      fetchPopularityMovies() {
        this.popularFilms = []

        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc' + '&api_key=' + this.movieDbApiKeyV3)
          .then((res) => {
            return res.json()
          })
          .then((res) => {
            this.popularFilms = res.results;
            this.popularFilms.splice(5, 15);
            console.log(this.popularFilms);
          })
      },
      logout: function () {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login')
        })
      }
    },
    beforeMount() {
      this.fetchPopularityMovies()
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
    max-width: 250px;
  }

  a {
    color: #35495E;
  }
</style>
