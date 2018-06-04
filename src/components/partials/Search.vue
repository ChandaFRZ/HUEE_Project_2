<template>
    <div class="search">
        <!-- Search form -->
        <form class="form-inline md-form form-sm">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" v-model="searchText">
        </form>

        <!-- TODO: Display movie results here -->
        <span>{{ searchText }}</span>

    </div>
</template>

<script>

    export default {

        name: 'search',
        data() {
            return {
                searchText: ''
            }
        },
        methods: {
            searchForMovie: function (searchText) {
                //TODO: search for movies with given text
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
