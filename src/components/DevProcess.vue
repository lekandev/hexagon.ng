<template>
    <section class="devProcess">
        <ul class="devProcesses">
            <li class="process">
                <img src="../assets/undraw_Wireframing.svg" alt="">
                <b>Design</b>
            </li>
            <li class="process">
                <img src="../assets/undraw_development.svg" alt="">
                <b>Development</b>
            </li>
            <li class="process">
                <img src="../assets/undraw_review.svg" alt="">
                <b>Product Review</b>
            </li>
            <li class="process">
                <img src="../assets/undraw_result.svg" alt="">
                <b>Final Touches</b>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'DevProcess'
}
</script>

<style lang="scss" scoped>
.devProcesses {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

     .process:not(:last-child) {
       margin-right: 40px;
     }
  
     .process {
        padding: 30px;
        border-radius: 50%;
        background-color: rgba(116, 252, 6, 0.7);

       img {
         width: 130px;
         height: 130px;
       }
     }
}
</style>