<template>
  <div class="search">
    <input type="text" name="search" placeholder="Enter Film Name" v-model="query" @keypress.enter="handleSearch">
    <button v-on:click="handleSearch">Search</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        query: ''
      }
    },
    methods: {
      handleSearch() {
        if (this.query == "") {
          alert("Nothing entered for a search!")
        } else {
          this.$emit('SearchRequested', this.query)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .search input {
    padding: 10px;
    width: 400px;
    border-radius: 10px;
  }

  .search button {
    padding: 10px;
    width: 100px;
    border-radius: 10px;
    background-color: #60e9ff;

  }
</style>
