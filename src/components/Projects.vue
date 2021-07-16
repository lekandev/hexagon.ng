<template>
  <section class="projects">
    <ProjectCard
      image="hero_bg.jpg"
      name="Creative Agency"
      link="https://github.com/lekandev/Creative-agency-website"
    />
    <ProjectCard
      image="hero_bg.jpg"
      name="Creative Agency"
      link="https://github.com/lekandev/Creative-agency-website"
    />
  </section>
</template>
<script>
import ProjectCard from "./ProjectCard";

export default {
  name: "Projects",
  components: {
    ProjectCard,
  },
};
</script>

<style scoped lang="scss">
@import "./utilities/_variables";
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  margin-bottom: 100px;
}
</style>
