<template>
  <section class="pricing">
    <h2>Pricing</h2>
    <p>
      Our mode of pricing usually depends on the type of website, mobile app or
      service, budget or features required by you or your business as we take
      into deep consideration the welfare of our customers but below are the base
      pricing for some of our services although it really depends on you.
    </p>
    <div class="pricing__container">
      <div class="pricing__price">
        <h3>Simple Website</h3>
        <p class="price__desc">
          A simple website to give your
          business an online presence
          with about 2 - 4 pages.
        </p>
        <em class="price">#55,000</em>
        <small>Revision Included</small>
      </div>
      <div class="pricing__price">
        <h3>Simple Website</h3>
        <p class="price__desc">
          A simple website to give your
          business an online presence
          with about 2 - 4 pages.
        </p>
        <em class="price">#55,000</em>
        <small>Revision Included</small>
      </div>
      <div class="pricing__price">
        <h3>Simple Website</h3>
        <p class="price__desc">
          A simple website to give your
          business an online presence
          with about 2 - 4 pages.
        </p>
        <em class="price">#55,000</em>
        <small>Revision Included</small>
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
.pricing {
  text-align: center;
  margin: 100px;

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }

  .pricing__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

    .pricing__price {
      padding: 20px;
      border-radius: 10px;

      h3 {
        margin-bottom: 10px;
      }

      .price__desc {
        margin-bottom: 10px;
      }

      .price {
        font-size: 1.1rem;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
