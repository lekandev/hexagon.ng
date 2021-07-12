<template>
  <section class="projects">
    <ProjectCard />
    <ProjectCard />
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
</style>
