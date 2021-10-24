<template>
    <div class="hero">
      <div class="hero__left" data-aos="fade-right">
        <h1 class="hero__name">Hexagon</h1>
        <h3 class="hero__agency-name">software development</h3>
        <p class="hero__tagline">
          We build innovative software solutions that not only meets
          business requirements but scale as your business grows
        </p>
        <a href="#" class="hero__link--button">Services we offer</a>
      </div>

      <div class="hero__right" data-aos="fade-left">
        <img src="../assets/hero_svg.svg" alt="" />
      </div>
    </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped lang="scss">
@import "./utilities/_variables";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Nunito+Sans:wght@200;300&family=Quicksand:wght@300&display=swap");

.hero {
  width: 100%;
  height: 100vh;;
  background-color: $secondary-color;
  color: $text-color2;
  display: flex;
  //   justify-content: center;
  align-items: center;
  color: $text-color3;

  .hero__left {
    margin-left: 100px;
    width: 40%;
    margin-right: 100px; // Little p here

    .hero__name {
      font-size: 3.3rem;
      text-transform: uppercase;
      margin-bottom: 10px;
      color: $text-color1;
      font-family: "Nunito Sans", sans-serif;
    }

    .hero__agency-name {
      font-size: 3.6rem;
      letter-spacing: 0.7rem;
      text-transform: capitalize;
      margin-bottom: 20px;
    }

    .hero__tagline {
      font-size: 1.2rem;
      margin-bottom: 40px;
      font-family: "Nunito Sans", sans-serif;
    }

    .hero__link--button {
      padding: 15px;
      color: #fff !important;
      background-color: $primary-color;
      text-decoration: none;
      border: 2px solid $primary-color;
      transition: 0.3s ease-in-out;
      font-family: "Nunito Sans", sans-serif;
    }

    .hero__link--button:hover {
      background-color: transparent;
      color: $text-color1 !important;
    }
  }

  .hero__right {
    display: grid;
    place-content: center;

    img {
      width: 500px;
    }
  }
}

// media queries
@media screen and (max-width: 640px) {
  nav {
    .nav__items {
      display: none;
    }
  }

  .hero {
    .hero__left {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      text-align: center;
      padding: 10px;

      .hero__name {
        font-size: 2.5rem;
      }

      .hero__agency-name {
        font-size: 2.6rem;
        letter-spacing: 0.4rem;
        text-transform: capitalize;
        margin-bottom: 20px;
      }
    }

    .hero__right {
      display: none;
    }

    //     .hero__tagline {
    //       font-size: 1.2rem;
    //     }
  }
}
</style>
