<template>
  <div>
    <div>Hello H52103</div>
    <p>Vue CLI</p>
    <!-- <todo-list/> -->
    <TodoList/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList/index.vue';
const username = 'laoxie';
export default {
  name: "App",
  data(){
    return {}
  },
  computed:{},
  methods:{},
  components: {
    // HelloWorld,
    TodoList
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
