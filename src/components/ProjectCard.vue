<template>
  <div class="projectCard">
    <img v-bind:src="require(`@/assets/${image}`)" v-bind:alt="name" />
    <h2>{{ name }}</h2>
    <!-- <p>{{ desc }}</p> -->
    <a v-bind:href="link" target="_blank" rel="noopener">View</a>
  </div>
</template>
<script>
export default {
  name: "ProjectCard",
  props: {
    image: String,
    name: String,
    desc: String,
    link: String,
  },
};
</script>

<style scoped lang="scss">
@import "./utilities/_variables";
.projectCard {
  text-align: center;

  img {
    width: 500px;
    overflow: hidden;
    margin-bottom: 10px;
  }

  h2 {
    margin-bottom: 25px;
  }

  a {
    padding: 15px;
    color: #fff !important;
    background-color: $primary-color;
    text-decoration: none;
    border: 2px solid $primary-color;
    transition: 0.3s ease-in-out;
  }

  a:hover {
    background-color: transparent;
  }
}

@media screen and (max-width: 640px) {
  .projectCard {

    img {
      width: 350px;
    }
  }
}
</style>
