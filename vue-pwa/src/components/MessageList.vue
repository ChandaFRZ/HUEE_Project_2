<template>
    <div>
        <ul>
            <li v-for="message in messages">
                {{ message }}
            </li>
        </ul>

        <Movie movieid="1234"></Movie>
        <Movie movieid="2345"></Movie>
        <Movie movieid="3456"></Movie>
        <Movie movieid="4567"></Movie>
        <Movie movieid="5678"></Movie>
    </div>

</template>

<script>
    import Movie from './partials/Movie'
    export default {
      name: 'list',
        data() {
            return {
                msg: 'Welcome to Your Vue.js PWA',
                messages: ['Hey John', 'Howdy Paco']
            }
        },
        components: {
            Movie
        }
    }
</script>