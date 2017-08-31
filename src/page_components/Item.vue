<template>
    <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">

            <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>

            <div class="card-body">

                <h4 class="card-title">
                    <a href="#">{{singleItem.name}}</a>
                </h4>
                <h5><span>{{singleItem.priceSign}}</span> {{singleItem.price}}</h5>
                <p class="card-text">{{singleItem.description}}</p>
                <button type="button" class="btn btn-primary" v-on:click="convertCad">Convert to {{singleItem.convertPrice}}</button>
                <hr />
                <span>{{singleItem.category}}</span>

            </div>
            <div class="card-footer">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props:['singleItem'],
        methods:{
            convertCad:function(){
                if(this.CAD) {
                    this.price = (this.price * 0.9132).toFixed(2);
                    this.priceSign = "USD";
                    this.convertPrice = "CAD";
                }else{
                    this.price = (this.price / 0.9132).toFixed(2);
                    this.priceSign = "CAD";
                    this.convertPrice = "USD";
                }
                this.CAD = !this.CAD;
            }
        }
    }
</script>

<style>

</style>