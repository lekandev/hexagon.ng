<template>
  <section class="testimonials">
      <Testimonial content="Blacksmelt, tripod fish grunt mackerel vendace surfperch carpsucker surgeonfish streamer fish boga deepwater stingray. Spaghetti Blacksmelt, tripod fish grunt mackerel vendace surfperch carpsucker surgeonfish streamer fish boga deepwater stingray. Spaghetti Blacksmelt, tripod fish grunt mackerel vendace surfperch carpsucker surgeonfish streamer fish boga deepwater stingray. Spaghetti Blacksmelt, tripod fish grunt mackerel vendace surfperch carpsucker surgeonfish streamer fish boga deepwater stingray. Spaghetti" image="team__member2.png" author="Lekandev" />
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
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
