<template>
  <section class="services">
    <h2>Services We Offer</h2>
    <div class="services__container">
      <div class="service">
        <div class="service__icon">
          <i class="far fa-window-maximize"></i>
        </div>
        <h2 class="service__name">Web Development</h2>
        <p class="service__info">
          We create scalable web solutions that meets your business
          requirements.
        </p>
      </div>
      <div class="service">
        <div class="service__icon">
          <i class="fas fa-mobile-alt"></i>
        </div>
        <h2 class="service__name">Mobile Development</h2>
        <p class="service__info">
          We build for Mobile, Android and iOS apps alike and other hand held
          devices
        </p>
      </div>
      <div class="service">
        <div class="service__icon">
          <i class="fas fa-bullhorn"></i>
        </div>
        <h2 class="service__name">Digital Marketing</h2>
        <p class="service__info">
          We create scalable web solutions that meets your business
          requirements.
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Services",
};
</script>

<style scoped lang="scss">
@import "./utilities/_variables";
.services {
  margin: 100px;

  h2 {
    text-align: center;
    margin-bottom: 30px;
  }

  .services__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    // align-items: center;

    .service {
      text-align: center;
      padding: 20px;

      .service__icon {
        font-size: 2.2rem;
        margin-bottom: 10px;
      }

      .service__name {
        color: $text-color1;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
