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
        <img src="../assets/H.png" alt="" />
      </div>

      <!-- <div class="hex hexagon1"><h2>H</h2></div>
      <div class="hex hexagon2"></div>
      <div class="hex hexagon3"></div> -->
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
  height: 100vh;
  background-image: linear-gradient(
    to right,
    rgb(29, 29, 29),
    rgb(116, 252, 6)
  );
  color: $text-color2;
    // background-blend-mode: multiply;
    // background-repeat: no-repeat;
  display: flex;
  //   justify-content: center;
  align-items: center;
  //   color: #fff;

  .hero__left {
    margin-left: 100px;
    width: 40%;
    margin-right: 30px;
    // display: flex;
    // flex-direction: column;
    //     justify-content: center;
    //     // align-items: center;

    .hero__name {
      font-size: 3.5rem;
      text-transform: uppercase;
      margin-bottom: 15px;
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
      width: 650px;
    }
  }
}

// .hex {
//   position: absolute;
//   background-color: #ffffff;
//   clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
//   box-shadow: -33px 28px 5px 0px rgba(0,0,0,0.75);
// }

// .hexagon1 {
//   width: 350px;
//   height: 310px;
//   top: 150px;
//   left: 67%;
//   color: #111;
//   h2 {
//     position: absolute;
//   }
// }

// .hexagon2 {
//   width: 200px;
//   height: 170px;
//   top: 400px;
//   left: 58%;
// }

// .hexagon3 {
//   width: 90px;
//   height: 80px;
//   top: 480px;
//   left: 73%;
// }

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
