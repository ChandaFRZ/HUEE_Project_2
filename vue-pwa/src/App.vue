<template>
    <div id="app">
        <header>
            <div class="header__item"><span>Movie PWA</span></div>
            <div class="header__item logout"><button v-on:click="logout">Logout</button></div>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: 'app',
        methods: {
            logout: function () {
                firebase.auth().signOut().then(() => {
                    this.$router.replace('login')
                })
            }
        }
    }
</script>

<style>
    body {
        margin: 0;
    }

    .section {
        margin-top: 60px;
        margin-bottom: 60px;
    }

    .header__item {
        display: inline-block;
    }

    .header__item.logout {
        float: right;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    main {
        text-align: center;
        margin-top: 40px;
    }

    header {
        margin: 0;
        height: 56px;
        padding: 0 16px 0 24px;
        background-color: #35495E;
        color: #ffffff;
    }

    header span {
        display: block;
        position: relative;
        font-size: 20px;
        line-height: 1;
        letter-spacing: .02em;
        font-weight: 400;
        box-sizing: border-box;
        padding-top: 16px;
    }
</style>
