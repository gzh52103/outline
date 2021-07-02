<template>
    <div>
        Mine
    </div>
</template>
<script>
export default {
    name:'Mine',
    data(){
        return {

        }
    },
    created(){
        console.log('Mine.created');
    },
    mounted(){
        console.log('Mine.mounted');
    },
    beforeRouteEnter(to,from,next){
        console.log('Mine.beforeRouteEnter')
        next();
    },
    beforeRouteUpdate(to,from,next){
        console.log('Mine.beforeRouteUpdate')
        next();
    },
    beforeRouteLeave(to,from,next){
        console.log('Mine.beforeRouteLeave')
        next();
    }
}
</script>
