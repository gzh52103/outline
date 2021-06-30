<template>
    <div id="life" ref="life">
        count:{{count}}
        <button @click="changeCount">{{count}}</button>
        <button @click="destroyComponent">销毁</button>
    </div>
</template>
<script>
let timer;
export default {
  data() {
    return {
      name: "Lifecycle",
      count: 10,
      page:1,
    };
  },
  methods:{
      changeCount(){
          console.log('changeCount')
          this.count++;
      },
      destroyComponent(){
          this.$destroy();
      }
  },
  // 生命周期函数
  beforeCreate() {
    console.log("beforeCreate", this.count);
  },
  created() {
    console.log("created", this.count);
    // ajax().then()
    timer = setInterval(()=>{
        console.log('interval');
    },1000)
  },
  beforeMount() {
    // beforeMount无法获取节点
    const life = document.getElementById("life");
    console.log("beforeMount", this.$el, life);
  },
  mounted() {
    const life = document.getElementById("life");
    console.log("mounted", this.$el, life.innerHTML);
    console.log('this',this);

    // setTimeout(()=>{
    //     this.$destroy();
    // },5000)
  },
  beforeUpdate(){
      console.log("beforeUpdate", this.$el.innerHTML);
  },
  updated(){
      console.log("updated", this.$el.innerHTML);
  },
  beforeDestroy(){
      console.log('beforeDestroy')
  },
  destroyed(){
      console.log('destroyed')

      // 取消ajax请求
    //   清除定时器
    clearInterval(timer);
  },
};
</script>
