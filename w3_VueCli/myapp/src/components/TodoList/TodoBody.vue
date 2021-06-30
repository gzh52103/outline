<template>
    <table class="table table-striped">
        <thead>
            <slot name="head" v-if="$slots.head" :type="type"/>
            <tr v-else>
                <th scope="col"><input type="checkbox" /></th>
                <th scope="col">#</th>
                <th scope="col">待办事项</th>
                <th scope="col">添加时间</th>
                <th scope="col">是否完成</th>
                <th scope="col">操作</th>
            </tr>
        </thead>
        <tbody>
            <!-- <tr
                is="todo-item"
                v-for="(item,idx) in datalist"
                :idx="idx"
                :item="item"
                :key="item.id"
            ></tr> -->
            <!-- <TodoItem v-for="(item,idx) in datalist"
                :idx="idx"
                :item="item"
                :key="item.id"
            /> -->
            <slot :type="type" username="laoxie" />
        </tbody>
    </table>
</template>
<script>
import TodoItem from './TodoItem.vue';
export default {
  name: "TodoBody",
  // 接收父组件数据
  props: [
    "datalist"
    // 'complete',
    // 'remove'
  ],
  data() {
    console.log('TodoBody',this);
    return {
      type:'table body'
    };
  },
  template: "#todoBody",
  components: {
    // TodoItem
  }
};
</script>
<style>
</style>

