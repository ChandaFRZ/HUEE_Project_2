<template>
  <div class="hello">
    <h1>Dashboard</h1>

    <Search></Search>

    <MyMovies :limit="true"></MyMovies>
    <NewMovies :limit="true"></NewMovies>
    <MyActors :limit="true"></MyActors>



  </div>
</template>

<script>
  import Search from './partials/Search.vue'
  import MyMovies from './MyMovies.vue'
  import NewMovies from './NewMovies.vue'
  import MyActors from './MyActors.vue'
  import firebase from 'firebase'

  export default {

        name: 'dashboard',
        data() {
            return {
                msg: 'Welcome to Your Vue.js PWA',
                messages: ['Hey John', 'Howdy Paco']
            }
        },
        components: {
            Search,
            MyMovies,
            NewMovies,
            MyActors
        },
        methods: {
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
