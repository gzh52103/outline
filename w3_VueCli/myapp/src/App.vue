<template>
  <div>
    <div>Hello H52103</div>
    <!-- <p>Vue CLI</p> -->
    <!-- <todo-list/> -->
    <!-- <TodoList/> -->

    <Lifecycle v-if="show" />
    <div v-else>组件已被销毁</div>
    <button @click="show=!show">销毁组件{{show}}</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TodoList from './components/TodoList/index.vue';
import Lifecycle from "./components/Lifecycle.vue";
export default {
  name: "App",
  data() {
    return {
      show: true
    };
  },
  computed: {},
  methods: {},
  components: {
    // HelloWorld,
    // TodoList,
    Lifecycle
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
