<template>
  <div>
    <Search v-on:SearchRequested="handleSearch"></Search>

    <h2>Popular Films</h2>
    <ul v-if="popularFilms.length > 0">
      <li v-for="film in popularFilms">
        <film v-bind:film="film"></film>
      </li>
    </ul>

    <div v-if="searchFilms.length > 0">
      <h2>Search Results</h2>
      <ul>
        <li v-for="film in searchFilms">
          <film v-bind:film="film"></film>
        </li>
      </ul>
    </div>

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
        searchFilms: [],
        popularFilms: [],
        apiKey: '49b8bfd',
        movieDbApiKeyV3: '9044afcc39f9e991ed70c79944242022'
      }
    },
    methods: {
      handleSearch(query) {
        this.searchFilms = []

        fetch('https://api.themoviedb.org/3/search/movie?&api_key=' + this.movieDbApiKeyV3 + '&query=' + query)
          .then((res) => {
            return res.json()
          })
          .then((res) => {
            this.searchFilms = res.results
            this.searchFilms.splice(5, 15)
          })
      },
      fetchPopularityMovies() {
        this.popularFilms = []

        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc' + '&api_key=' + this.movieDbApiKeyV3)
          .then((res) => {
            return res.json()
          })
          .then((res) => {
            this.popularFilms = res.results
            this.popularFilms.splice(5, 15)
          })
      },
      logout: function () {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login')
        })
      }
    },
    beforeMount () {
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
