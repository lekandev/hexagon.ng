<template>
  <main>
    <Hero />
    <About />
    <Services />
    <Projects />
    <Pricing />
    <Team />
    <Contact />
    <Footer />
  </main>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Services from "./components/Services.vue";
import Projects from "./components/Projects.vue";
import Pricing from "./components/Pricing.vue";
import Team from "./components/Team.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Hero,
    About,
    Services,
    Projects,
    Pricing,
    Team,
    Contact,
    Footer,
  },
};
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
