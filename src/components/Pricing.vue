<template>
  <section class="pricing">
    <h2>Pricing</h2>
    <p>
      Our mode of pricing usually depends on the type of website, mobile app or
      service, budget or features required by you or your business as we take
      into deep consideration the welfare of our customers but below are the
      base pricing for some of our services although it really depends on you.
    </p>
    <div class="pricing__container">
      <div class="pricing__price">
        <h3>Simple Website</h3>
        <p class="price__desc">
          A simple website to give your business an online presence with about 2
          - 4 pages.
        </p>
        <em class="price">&#8358;55,000</em>
        <p>Revision Included</p>
      </div>
      <div class="pricing__price">
        <h3>Simple Website</h3>
        <p class="price__desc">
          A simple website to give your business an online presence with about 2
          - 4 pages.
        </p>
        <em class="price">&#8358;55,000</em>
        <p>Revision Included</p>
      </div>
      <div class="pricing__price">
        <h3>Simple Website</h3>
        <p class="price__desc">
          A simple website to give your business an online presence with about 2
          - 4 pages.
        </p>
        <em class="price">&#8358;55,000</em>
        <p>Revision Included</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Pricing",
};
</script>

<style lang="scss" scoped>
@import "./utilities/_variables";

.pricing {
  text-align: center;
  margin: 100px;

  h2 {
    margin-bottom: 10px;
    color: $text-color1;
  }

  p {
    margin-bottom: 50px;
  }

  .pricing__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    place-items: center;

    .pricing__price {
      padding: 20px;
      border-radius: 10px;
      width: 230px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;

      h3 {
        margin-bottom: 20px;
      }

      .price__desc {
        margin-bottom: 25px;
      }

      .price {
        font-size: 1.5rem;
        font-weight: 700;
        color: $text-color1;
        font-family: "Quicksand", sans-serif;
      }

      p {
        margin-top: 30px;
      }
    }

    .pricing__price:hover {
      transform: scaleY(1.06);
    }
  }
}

@media screen and (max-width: 640px) {
  .pricing {
    margin: 50px;

    .pricing__container {
      grid-row-gap: 30px;
    }
  }
}
</style>
