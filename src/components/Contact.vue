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
        <li><i class="far fa-envelope"></i>hexagondevs@gmail.com</li>
        <li><i class="fas fa-phone-alt"></i>08050510619</li>
        <li><i class="fab fa-twitter"></i>@hexagon_devs</li>
        <li><i class="fab fa-linkedin-in"></i>/hexagon_devs</li>
        <li><i class="fab fa-instagram"></i>@hexagon_devs</li>
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

  .contact__form {
    margin-right: 100px;

    form {
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

  .contact__info {
    ul {
      li {
        font-size: 1.7rem;
        margin-bottom: 20px;

        i {
          margin-right: 15px;
        }
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
