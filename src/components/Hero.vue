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
      <div class="hero__left">
        <h1 class="hero__name">Hexagon.ng</h1>
        <h3 class="hero__agency-name">software development</h3>
        <p class="hero__tagline">
          We build innovative software that meets business requirements
        </p>
        <a href="#" class="hero__link--button">Services we offer</a>
      </div>

      <div class="hero__right">
        <img src="../assets/hero_bg.jpg" alt="" />
      </div>
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

// .nav__container {
//   position: fixed;
// }

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
  background-image: linear-gradient(
    to right,
    rgb(29, 29, 29),
    rgb(116, 252, 6)
  );
//   // background-blend-mode: multiply;
//   // background-repeat: no-repeat;
  display: flex;
//   justify-content: center;
  align-items: center;
//   color: #fff;

  .hero__left {
    margin-left: 150px;
    width: 50%;
    // display: flex;
    // flex-direction: column;
//     justify-content: center;
//     // align-items: center;

    .hero__name {
      font-size: 3.5rem;
      text-transform: uppercase;
      margin-bottom: 20px;
      color: $text-color1;
    }

    .hero__agency-name {
      font-size: 4rem;
      letter-spacing: .8rem;
    }

    .hero__tagline {
      font-size: 1.4rem;
      margin-bottom: 40px;
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

  .hero__right {
//     width: 40%;

    img {
      width: 500px;
    }
  }
}

// // media queries
// @media screen and (max-width: 640px) {
//   nav {
//     .nav__items {
//       display: none;
//     }
//   }

//   .hero {
//     .hero__name {
//       font-size: 3rem;
//     }

//     .hero__tagline {
//       font-size: 1.2rem;
//     }
//   }
// }
</style>
