<template>
  <div class="hello">

    <MessageList/>
    <Search v-on:SearchRequested="handleSearch"></Search>
    <film v-bind:films="films"></film>
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
            apiKey: '49b8bfd'
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
          logout: function() {
            firebase.auth().signOut().then(() => {
              this.$router.replace('login')
            })
          }
        }
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
  }

  a {
    color: #35495E;
  }
</style>
