<template>
    <tr>
        <td><input
                type="checkbox"
                v-model="item.checked"
            /></td>
        <td>{{idx+1}}</td>
        <td>{{item.todo}}</td>
        <td>{{item.addtime}}</td>
        <td>{{item.complete ? '是' : '否'}}</td>
        <td>
            <div class="btn-group">
                <!-- <button class="btn btn-outline-primary btn-sm" @click="complete(item.id)">完成</button>
                    <button class="btn btn-outline-danger btn-sm" @click="remove(item.id)">删除</button> -->
                <button
                    class="btn btn-outline-primary btn-sm"
                    @click="completeItem(item.id)"
                >完成</button>
                <button
                    class="btn btn-outline-danger btn-sm"
                    @click="removeItem(item.id)"
                >删除</button>
            </div>
        </td>
    </tr>
</template>
<script>
import Bus from "./Bus";

export default {
  props: ["item", "idx"],
  template: "#todoItem",
  methods: {
    removeItem(id) {
      console.log("todoItem.remove");
      Bus.$emit("remove", id);
      //   this.$root.$emit("remove", id);
    },
    completeItem(id) {
      console.log("todoItem.complete");
      Bus.$emit("complete", id);
      //   this.$root.$emit("complete", id);
    }
  }
};
</script>
<style>
</style>

