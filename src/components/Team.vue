<template>
  <section class="team">
    <h2 class="team__title">Our Team</h2>
    <div class="team__container">
      <div class="team__member" data-aos="zoom-in">
        <img src="../assets/excellence.jpg" alt="" />
        <h3>Gilbert Excellence</h3>
        <p>Android App developer</p>
        <small class="team__member--stack">
          Java · C++ · C#
        </small>
      </div>
      <div class="team__member" data-aos="zoom-in">
        <img src="../assets/gbolahan.jpg" alt="" />
        <h3>Gbolahan Okuneye</h3>
        <p>Frontend developer</p>
        <small class="team__member--stack">
          HTML · CSS · JavaScript
        </small>
      </div>
      <div class="team__member" data-aos="zoom-in">
        <img src="../assets/team__member4.png" alt="" />
        <h3>Muhammad Dass</h3>
        <p>Frontend developer/Digital Marketer</p>
        <small class="team__member--stack">
          HTML · CSS · JavaScript · SEO
        </small>
      </div>
      <div class="team__member" data-aos="zoom-in">
        <img src="../assets/team__member2.png" alt="" />
        <h3>Gbadebo Emmanuel Oluwarimi</h3>
        <p>Fullstack developer</p>
        <small class="team__member--stack">
          HTML · CSS · JavaScript · React · Python · Django
        </small>
      </div>
      <div class="team__member" data-aos="zoom-in">
        <img src="../assets/ifechukwu.jpg" alt="" />
        <h3>Igbokwe Gabriel Ifechukwu</h3>
        <p>Frontend developer</p>
        <small class="team__member--stack">
          HTML · CSS · JavaScript · Vue
        </small>
      </div>
      <div class="team__member" data-aos="zoom-in">
        <img src="../assets/kabir.jpg" alt="" />
        <h3>Mohammed Kabir Hussaini</h3>
        <p>Fullstack developer</p>
        <small class="team__member--stack">
          HTML · CSS · JavaScript · React · Vue · Node · React Native
        </small>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Team",
};
</script>

<style scoped lang="scss">
@import "./utilities/_variables";

.team {
  .team__title {
    text-align: center;
    margin-bottom: 50px;
    color: $text-color1;
  }

  .team__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 40px;
    place-items: center;
    text-align: center;
    margin-bottom: 100px;
  
    .team__member {
      width: 300px;
  
      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 15px;
      }
  
      h3 {
        margin-bottom: 7px;
      }
  
      p {
        margin-bottom: 7px;
      }
    }
  }
}

@media screen and (max-width: 640px) {
  .team {
    .team__container {
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      
      .team__member {
        width: 270px;
      }
    }
  }
}
</style>
