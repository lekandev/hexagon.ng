<template>
  <section class="services" data-aos="fade-down">
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
    color: $text-color1;
  }

  .services__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 50px;
    // align-items: center;

    .service {
      // width: 20rem;
      text-align: center;
      padding: 20px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      border-radius: 10px;

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

@media screen and (max-width: 640px) {
  .services {
    margin: 40px;

    .services__container {

      .service {
        // padding: 10px;
      }
    }
  }
}
</style>
