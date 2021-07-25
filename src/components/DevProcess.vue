<template>
    <section class="devProcess">
        <ul class="devProcesses">
            <li class="process">
                <img src="" alt="">
                <b>Design</b>
            </li>
            <li class="process">
                <img src="" alt="">
                <b>Development</b>
            </li>
            <li class="process">
                <img src="" alt="">
                <b>Product Review</b>
            </li>
            <li class="process">
                <img src="" alt="">
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
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))

    // .process:not(:last-child) {

    // }
}
</style>