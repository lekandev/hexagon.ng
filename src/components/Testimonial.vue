<template>
    <div class="testimonial">
        <div class="testimonial__content">
            {{content}}
        </div>
        <div class="testimonial__author">
            <img v-bind:src="require(`@/assets/${image}`)" v-bind:alt="author_pic" />
            <h4>{{author}}</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Testimonial',
    props: {
        content: String,
        image: String,
        author: String,
    }
}
</script>

<style lang="scss" scoped>
.testimonial {
    width: 500px;
    height: 350px;
    border-radius: 20px;
    padding: 10px;

    .testimonial__author {}
}
</style>