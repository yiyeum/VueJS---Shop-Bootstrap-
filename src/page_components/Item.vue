<template>
    <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
            <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
            <div class="card-body">
                <h4 class="card-title">
                    <a href="#">{{name}}</a>
                </h4>
                <h5>{{price}}</h5>
                <p class="card-text">{{description}}</p>
                <p>{{category}}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data:function(){
            return{
                name : 'Item Name',
                price : '$24.99',
                description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
                category : 'Category1'
            }
        }
    }
</script>

<style>

</style>