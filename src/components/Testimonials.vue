<template>
  <section class="testimonials">
      <!-- <Testimonial /> -->
  </section>
</template>

<script>
import Testimonial from "./Testimonial.vue"

export default {
  name: "Testimonials",
  components: {
      Testimonial
  }
};
</script>

<style lang="scss" scoped>
.testimonials {
  width: 100%;
  height: 60vh;
  background-image: linear-gradient(
    to right,
    rgb(29, 29, 29),
    rgb(116, 252, 6)
  );
  margin-bottom: 100px;
}
</style>
