<template>
    <div class="todolist container">
        <todo-head v-on:add="addItem"></todo-head>
        <todo-body>
            <template v-slot:head>
                <tr>
                    <th><input type="checkbox" /></th>
                    <th>行号</th>
                    <th>待办事项</th>
                    <th>添加时间</th>
                    <th>是否完成</th>
                    <th>操作</th>
                </tr>
            </template>
            <template v-slot:default="scope">
                <!-- <tr>
                    <td>hello</td>
                    <td>hello</td>
                    <td>hello</td>
                </tr> -->
                <!-- {{scope}} -->
                <TodoItem
                    v-for="(item,idx) in list"
                    :key="item.id"
                    :item="item"
                    :idx="idx"
                />
            </template>
        </todo-body>
        <todo-foot v-bind:datalist="list"></todo-foot>
    </div>
</template>

<script>
import TodoHead from "./TodoHead.vue";
import TodoBody from "./TodoBody.vue";
import TodoFoot from "./TodoFoot.vue";
import TodoItem from "./TodoItem.vue";
import Bus from "./Bus";

import "bootstrap/dist/css/bootstrap.css";

export default {
  name: "Todolist",
  data() {
    return {
      todo: "",
      list: [
        {
          id: 1,
          todo: "定个小目标睡一整天",
          complete: true,
          checked: true,
          addtime: Date.now()
        },
        {
          id: 2,
          todo: "赚他一个亿津巴布韦币",
          complete: false,
          checked: false,
          addtime: Date.now() + 3600 * 1000
        },
        {
          id: 3,
          todo: "迎娶白富美，达到人生巅峰",
          complete: false,
          checked: false,
          addtime: Date.now() + 3600 * 1000 * 5
        }
      ]
    };
  },
  template: "#todolist",
  components: {
    TodoHead,
    TodoBody,
    TodoFoot,
    TodoItem
  },
  methods: {
    // 谁的数据谁修改原则：把修改数据的方法定义在数据所在的组件
    addItem(todo) {
      console.log("todoList.addItem");
      const data = {
        id: parseInt(Math.random() * 100000),
        todo,
        complete: false,
        checked: false,
        addtime: Date.now()
      };
      this.list.unshift(data);
    },
    removeItem(id) {
      this.list = this.list.filter(item => item.id !== id);
    },
    completeItem(id) {
      this.list.forEach(item => {
        if (item.id === id) {
          item.complete = true;
        }
      });
    },
    checkeItem() {}
  },
  // created生命周期函数，在组件实例化时执行
  created() {
    // 给Bus绑定事件
    Bus.$on("remove", this.removeItem);
    Bus.$on("complete", this.completeItem);
    // this.$root.$on("remove", this.removeItem);
    // this.$root.$on("complete", this.completeItem);
  }
};
</script>
<style>
</style>
