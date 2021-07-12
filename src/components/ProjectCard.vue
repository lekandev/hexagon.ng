<template>
  <div class="projectCard">
    <img src="{{image}}" alt="{{name}}" />
    <h2>{{ name }}</h2>
    <p>{{ desc }}</p>
    <a href="{{link}}" target="_blank" rel="noopener">View</a>
  </div>
</template>
<script>
export default {
  name: "ProjectCard",
  props: {
    image: Path,
    name: String,
    desc: String,
    link: String,
  },
};
</script>

<style scoped lang="scss">
@import "./utilities/_variables";
</style>
