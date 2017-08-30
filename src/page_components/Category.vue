<template>
    <div class="col-lg-3">

        <h1 class="my-4">Shop Name</h1>
        <div class="list-group">
            <a href="#" class="list-group-item" v-for='category in categories'>{{category}}</a>
        </div>

    </div>
</template>

<script>
    export default{
        data:function(){
            return{
                shopName : "Shop Name",
                categories :["Category 1", "Category 2", "Category 3"]
            }
        }
    }
</script>

<style>

</style>