<template>
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

    <h2 id="res" class="res"><i @click="toggleNav()" ref="res" class="fa fa-bars"></i></h2>
  </nav>
</template>

<script>
export default {
    name: 'Nav',
    methods: {
      toggleNav() {
        // const sideNav = document.qerySelector(".fa-bars");

        // sideNav.classList.toggle("fa-times")

        this.$refs.res.classList.toggle("fa-times")
      }
    }
}
</script>

<style scoped lang="scss">
@import "./utilities/_variables";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Nunito+Sans:wght@200;300&family=Quicksand:wght@300&display=swap");

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

  .res {
    display: none;
  }
}

@media screen and (max-width: 640px) {
  nav {
    padding: 20px;
    
    .nav__items {
      display: none;
    }

    .res {
      display: block;
    }
  }
}
</style>
