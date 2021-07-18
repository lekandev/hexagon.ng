<template>
  <section class="contact">
    <div class="contact__form">
      <form action="" method="POST">
        <input type="text" placeholder="John Doe" />
        <input type="text" placeholder="johndoe@gmail.com" />
        <input type="text" placeholder="message..." />
        <input type="submit" value="Send" />
      </form>
    </div>
    <div class="contact__info">
      <ul>
        <li>hexagondevs@gmail.com</li>
        <li>08050510619</li>
        <li>@hexagon_devs</li>
        <li>/hexagon_devs</li>
        <li>@hexagon_devs</li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: "Contact",
};
</script>

<style scoped lang="scss">
@import "./utilities/_variables";
.contact {
  display: flex;
  justify-content: center;
  align-items: center;

  .contact__form > form {
    display: flex;
    flex-direction: column;

    input {
      background: rgb(116, 252, 6);
      width: 350px;
      height: 50px;
      margin-bottom: 40px;
      border: none;
      padding: 15px;
      font-size: 1.1rem;
      border-radius: 7px;
    }
  }
}
</style>
