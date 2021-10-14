<template>
  <section class="contact">
    <div class="contact__form">
      <h2 class="contact__title">Contact Us</h2>
      <form action="" method="POST">
        <input type="text" placeholder="John Doe" />
        <input type="text" placeholder="johndoe@gmail.com" />
        <input type="text" placeholder="message..." />
        <input type="submit" value="Send" />
      </form>
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
  margin-bottom: 100px;

  .contact__form {
    padding: 45px 20px;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    .contact__title {
      text-align: center;
      margin-bottom : 20px;
    }

    form {
      display: flex;
      flex-direction: column;

      input {
        background: transparent;
        width: 300px;
        height: 50px;
        border: 1px solid rgb(116, 252, 6);
        padding: 15px;
        font-size: 1rem;
        border-radius: 10px;
        outline: none;
      }

      input:not(:last-child) {
        margin-bottom: 40px;
      }

      input:last-child {
        background: rgb(116, 252, 6);
        color: $text-color2;
        cursor: pointer;
      }
    }
  }
}

@media screen and (max-width: 640px) {
  .contact {
    flex-direction: column;

    .contact__form {
      margin-right: 0;
    }

    .contact__info {
      ul {
        li {
          font-size: 1.5rem;
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
