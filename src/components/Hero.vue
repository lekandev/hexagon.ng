<template>
  <div>
    <div class="nav__container">
      <nav>
        <div class="nav__logo">
          <h1>HEXAGON</h1>
        </div>

        <ul class="nav__items">
          <li class="nav__item"><a href="#">About Us</a></li>
          <li class="nav__item"><a href="#">Services</a></li>
          <li class="nav__item"><a href="#">Projects</a></li>
          <li class="nav__item"><a href="#">The Team</a></li>
        </ul>
      </nav>
    </div>

    <div class="hero">
      <h1 class="hero__name">Hexagon.ng</h1>
      <p class="hero__tagline">
        We build innovative software that meets business requirements
      </p>
      <a href="#" class="hero__link--button">Services we offer</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero'
};
</script>

<style scoped lang="scss">
@import "./utilities/_variables";

.nav__container {
  position: fixed;
}

nav {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 5px;
  border-radius: 30px;

  .nav__items {
    display: flex;

    .nav__item:not(:last-child) {
      margin-right: 10px;
    }
  }
}

.hero {
  width: 100%;
  height: 100vh;
  background: url("../assets/hero_bg.jpg") rgba($color: #000000, $alpha: 0.6);
  background-blend-mode: multiply;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  .hero__name {
    font-size: 4rem;
    text-transform: uppercase;
    margin-bottom: 20px;
    color: $text-color1;
  }

  .hero__tagline {
    font-size: 1.4rem;
    margin-bottom: 20px;
  }

  .hero__link--button {
    padding: 20px;
    color: #fff !important;
    background-color: $primary-color;
    text-decoration: none;
    border: 2px solid $primary-color;
    transition: 0.3s ease-in-out;
  }

  .hero__link--button:hover {
    background-color: transparent;
  }
}

// media queries
@media screen and (max-width: 640px) {
    // .hero__name{}
}
</style>
