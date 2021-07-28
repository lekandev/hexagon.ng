<template>
  <section class="projects">
    <h2>Projects</h2>
    <div class="projects__container">
      <ProjectCard
        image="creative-agency.png"
        name="Creative Agency"
        link="https://creative-agency-ten.vercel.app"
      />
      <ProjectCard
        image="ecommerce.png"
        name="Ecommerce Template"
        link="https://jscommerce.vercel.app"
      />
      <ProjectCard
        image="dashadmin.png"
        name="Admin Dashboard"
        link="https://admindash.vercel.app"
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
