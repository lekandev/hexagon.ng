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
        <img src="../assets/hero_svg.svg" alt="" />
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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Nunito+Sans:wght@200;300&family=Quicksand:wght@300&display=swap");

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
  padding: 30px;
  border-radius: 50px;
  position: fixed;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  // .nav__logo {}
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
  color: $text-color2;
  //   // background-blend-mode: multiply;
  //   // background-repeat: no-repeat;
  display: flex;
  //   justify-content: center;
  align-items: center;
  //   color: #fff;

  .hero__left {
    margin-left: 100px;
    width: 40%;
    margin-right: 150px;
    // display: flex;
    // flex-direction: column;
    //     justify-content: center;
    //     // align-items: center;

    .hero__name {
      font-size: 3.5rem;
      text-transform: uppercase;
      margin-bottom: 20px;
      color: $text-color1;
      font-family: "Nunito Sans", sans-serif;
    }

    .hero__agency-name {
      font-size: 4rem;
      letter-spacing: 0.8rem;
      text-transform: capitalize;
      margin-bottom: 20px;
    }

    .hero__tagline {
      font-size: 1.4rem;
      margin-bottom: 40px;
      font-family: "Nunito Sans", sans-serif;
    }

    .hero__link--button {
      padding: 20px;
      color: #fff !important;
      background-color: $primary-color;
      text-decoration: none;
      border: 2px solid $primary-color;
      transition: 0.3s ease-in-out;
      font-family: "Nunito Sans", sans-serif;
    }

    .hero__link--button:hover {
      background-color: transparent;
    }
  }

  .hero__right {
    //     width: 40%;

    img {
      width: 450px;
    }
  }
}

// // media queries
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

      .hero__name {
        font-size: 3rem;
      }

      .hero__agency-name {
        font-size: 3.5rem;
        letter-spacing: 0.6rem;
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
