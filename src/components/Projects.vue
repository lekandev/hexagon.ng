<template>
  <section class="projects">
    <h2>Projects</h2>
    <div class="projects__container">
      <ProjectCard
        image="creative-agency.png"
        name="Creative Agency"
        link="https://github.com/lekandev/Creative-agency-website"
      />
      <ProjectCard
        image="ecommerce.png"
        name="Creative Agency"
        link="https://github.com/lekandev/Creative-agency-website"
      />
      <ProjectCard
        image="dashadmin.png"
        name="Creative Agency"
        link="https://github.com/lekandev/Creative-agency-website"
      />
      <ProjectCard
        image="creative-agency.png"
        name="Creative Agency"
        link="https://github.com/lekandev/Creative-agency-website"
      />
    </div>
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
  margin-bottom: 100px;

  h2 {
    text-align: center;
    margin-bottom: 30px;
  }

  .projects__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(540px, 1fr));
    grid-row-gap: 40px;
  }
}

@media screen and (max-width: 640px) {
  .projects {

  .projects__container {
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  }
}
}
</style>
