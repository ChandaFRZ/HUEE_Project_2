<template>
    <ul>
        <li v-for="message in messages">
            {{ message }}
        </li>
    </ul>
</template>

<script>
    export default {
      name: 'list',
        data() {
            return {
                msg: 'Welcome to Your Vue.js PWA',
                messages: ['Hey John', 'Howdy Paco']
            }
        },
    }
</script>