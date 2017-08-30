<template>
    <div class="container">
        <div class="row">
            <kt-category></kt-category>
            <kt-main></kt-main>
        </div><!-- .row -->
    </div><!-- .container -->
</template>

<script>
    import Category from './Category.vue'
    import Main from './Main.vue'

    export default{
        components: {
            'kt-category' : Category,
            'kt-main' : Main
        }
    }
</script>

<style>

</style>