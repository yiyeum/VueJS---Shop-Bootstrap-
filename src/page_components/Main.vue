<template>
        <div class="col-lg-9">
            <kt-carousel></kt-carousel>
            <div class="row">
                <kt-item></kt-item>
            </div>
        </div><!-- .col-lg-9 -->
</template>

<script>
    import Carousel from './Carousel.vue'
    import Item from './Item.vue'

    export default{
        components: {
            'kt-carousel': Carousel,
            'kt-item' : Item
        }
    }
</script>

<style>

</style>