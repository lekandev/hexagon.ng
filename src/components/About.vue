<template>
  <section class="about">
    <div class="about__container">
      <img src="../assets/hero_bg.jpg" alt="about-pic" />
      <div class="about__info">
        <h2>About Us</h2>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
        accusantium quidem illo dolore fugit esse dignissimos, cupiditate
        nesciunt saepe porro veniam. Eius quibusdam provident quaerat magnam
        esse vero fugiat recusandae. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Facere accusantium quidem illo dolore fugit esse
        dignissimos, cupiditate nesciunt saepe porro veniam. Eius quibusdam
        provident quaerat magnam esse vero fugiat recusandae. Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Facere accusantium quidem illo
        dolore fugit esse dignissimos, cupiditate nesciunt saepe porro veniam.
        Eius quibusdam provident quaerat magnam esse vero fugiat recusandae.
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "About",
};
</script>

<style scoped lang="scss">
@import "./utilities/_variables";
.about {
  padding: 100px 100px 0px 100px;

  .about__container {
    display: flex;
    align-items: center;
    font-family: "Nunito Sans", sans-serif;

    img {
      width: 500px;
      margin-right: 50px;
    }

    .about__info {
      h2 {
        margin-bottom: 10px;
        font-family: "Quicksand", sans-serif;
        color: $text-color1;
      }
    }
  }
}

@media screen and (max-width: 640px) {
  .about {
    margin: 0;

    .about__container {
      flex-direction: column;

      img {
        width: 500px;
        margin-right: 0;
        margin-bottom: 50px;
      }
    }
  }
}
</style>
