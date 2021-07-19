<template>
  <section class="about">
    <div class="about__container">
      <img src="../assets/hero_bg.jpg" alt="about-pic">
      <div class="about__info">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Facere accusantium quidem illo dolore fugit esse dignissimos,
        cupiditate nesciunt saepe porro veniam. Eius quibusdam
        provident quaerat magnam esse vero fugiat recusandae.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Facere accusantium quidem illo dolore fugit esse dignissimos,
        cupiditate nesciunt saepe porro veniam. Eius quibusdam
        provident quaerat magnam esse vero fugiat recusandae.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Facere accusantium quidem illo dolore fugit esse dignissimos,
        cupiditate nesciunt saepe porro veniam. Eius quibusdam
        provident quaerat magnam esse vero fugiat recusandae.
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'About'
};
</script>

<style scoped lang="scss">
@import "./utilities/_variables";
.about {
  padding: 100px;

  .about__container {
    display: flex;
    align-items: center;
    font-family: 'Nunito Sans', sans-serif;

    img {
      width: 500px;
      margin-right: 50px;
    }
  }
}
</style>