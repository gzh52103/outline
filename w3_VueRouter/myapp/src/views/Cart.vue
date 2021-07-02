<template>
    <div>
        Cart
    </div>
</template>
<script>
export default {
    
    beforeRouteLeave(to,from,next){
        console.log('Cart.beforeRouteLeave');
        next();
    },
    beforeRouteEnter(to,from,next){
        console.log('Cart.beforeRouteEnter')
        next();
    },
    beforeRouteUpdate(to,from,next){
        console.log('Cart.beforeRouteUpdate')
        next();
    },
}
</script>
