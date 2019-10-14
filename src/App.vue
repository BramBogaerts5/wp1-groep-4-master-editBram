<template>
  <div id="app">
    <welcome-page></welcome-page>
    <router-link to="BookingPage">Booking Page</router-link>  //zo kan er tussen components gelinkt worden via vue-router
    <router-view/>
  </div>
</template>

<script>
    import WelcomePage from './components/WelcomePage.vue'

export default {
  name: 'app',
  components: {
    WelcomePage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
