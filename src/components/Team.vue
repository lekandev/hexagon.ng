<template>
  <section class="team">
    <div class="team__member">
      <img src="../assets/team__member4.png" alt="">
      <h2>Gilbert Excellence</h2>
      <p>Android App developer</p>
      <small class="team__member--stack">
        Java · C++ · C#
      </small>
    </div>
    <div class="team__member">
      <img src="../assets/team__member2.png" alt="">
      <h2>Gbolahan Okuneye</h2>
      <p>Frontend developer</p>
      <small class="team__member--stack">
        HTML · CSS · JavaScript
      </small>
    </div>
    <div class="team__member">
      <img src="../assets/team__member4.png" alt="">
      <h2>Muhammad Dass</h2>
      <p>Frontend developer/Digital Marketer</p>
      <small class="team__member--stack">
        HTML · CSS · JavaScript · SEO
      </small>
    </div>
    <div class="team__member">
      <img src="../assets/team__member2.png" alt="">
      <h2>Gbadebo Emmanuel Oluwarimi</h2>
      <p>Fullstack developer</p>
      <small class="team__member--stack">
        HTML · CSS · JavaScript · React · Python · Django
      </small>
    </div>
    <div class="team__member">
      <img src="../assets/team__member4.png" alt="">
      <h2>Igbokwe Gabriel Ifechukwu</h2>
      <p>Frontend developer</p>
      <small class="team__member--stack">
        HTML · CSS · JavaScript · Vue
      </small>
    </div>
    <div class="team__member">
      <img src="../assets/team__member2.png" alt="">
      <h2>Mohammed Kabir Hussaini</h2>
      <p>Fullstack developer</p>
      <small class="team__member--stack">
        HTML · CSS · JavaScript · React · Vue · Node · React Native
      </small>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Team',
};
</script>

<style scoped lang="scss">
@import "./utilities/_variables";
.team {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
  gap: 30px;
  // align-items: center;
  text-align: center;
  margin-bottom: 100px;

  .team__member {

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: contain;
    }
  }
}
</style>