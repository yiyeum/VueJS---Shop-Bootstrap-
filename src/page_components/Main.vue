<template>
        <div class="col-lg-9">
            <kt-carousel></kt-carousel>
            <div class="row">
                <kt-item v-for="item in items" v-bind:single-item="item"></kt-item>
            </div>
        </div><!-- .col-lg-9 -->
</template>

<script>
    import Carousel from './Carousel.vue'
    import Item from './Item.vue'

    export default{
        data:function(){
            return{
                items:[{
                    name: 'Item 1',
                    price: '24.99',
                    priceSign: 'CAD',
                    convertPrice: 'USD',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
                    category: 'Category1',
                    CAD: true
                },
                    {
                        name: 'Item 2',
                        price: '73.99',
                        priceSign: 'CAD',
                        convertPrice: 'USD',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
                        category: 'Category2',
                        CAD: true
                    },
                    {
                        name: 'Item 3',
                        price: '35.00',
                        priceSign: 'CAD',
                        convertPrice: 'USD',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
                        category: 'Category3',
                        CAD: true
                    }
                ]
            }
        },
        components: {
            'kt-carousel': Carousel,
            'kt-item' : Item
        }
    }
</script>

<style>

</style>