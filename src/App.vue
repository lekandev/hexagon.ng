<template>
  <Hero />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Hero from './components/Hero.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Hero,
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
  ul {
    list-style-type: none;
  }
  a {
    color: #333;
  }
}
</style>
