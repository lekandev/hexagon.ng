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
@import "./utilities/_variables";

.testimonial {
    width: 450px;
    height: 300px;
    border-radius: 20px;
    padding: 20px;
    background-color: $secondary-color;
    margin-right: 40px;

    .testimonial__content {
        margin-bottom: 10px;
    }

    .testimonial__author {
        display: flex;

        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 30px;
        }
    }
}
</style>