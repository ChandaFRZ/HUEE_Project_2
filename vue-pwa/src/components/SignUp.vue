<template>
  <div class="sign-up">
    <h3>Registration</h3>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button v-on:click="signUp">Sign up</button>
    <span>or go back to <router-link to="/login">login</router-link></span>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'signUp',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('login')
          },
          (err) => {
            alert('Oops. Something went wrong (' + err.message + ')!')
          }
        )
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sign-up {
    margin-top: 40px;
  }

  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }

  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }

  span {
    display: blocK;
    margin-top: 20px;
    font-size: 11px;
  }
</style>
