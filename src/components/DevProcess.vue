<template>
    <section class="devProcess">
        <h2 class="devProcess__title">Our Development Process</h2>
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
.devProcess {

    .devProcess__title {
        text-align: center;
    }

    .devProcesses {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
        place-items: center;
        align-items: center;
        text-align: center;
        gap: 30px;
        margin: 50px 100px;

        //  .process:not(:last-child) {
        //    margin-right: 40px;
        //  }
    
        .process {
            width: 220px;
            height: 220px;
            padding: 10px;
            border-radius: 50%;
            background-color: rgba(116, 252, 6, 0.45);
            display: grid;
            place-content: center;

            img {
            width: 120px;
            height: 120px;
            }

            b {
            display: block;
            }
        }
    }
}
</style>