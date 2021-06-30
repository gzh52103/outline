<template>
    <div class="input-group mb-3">
        <input
            type="text"
            class="form-control"
            v-model="event"
            ref="input"
            @keyup.enter="addItem"
        >
        <div class="input-group-append">
            <button
                class="btn btn-success"
                @click="addItem"
            >添加</button>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      event: ""
    };
  },
  template: "#todoHead",
  methods: {
    addItem() {
      console.log("todoHead.addItem");
      // $emit(事件名,参数)
      this.$emit("add", this.event);
      this.$emit("update:todo", "laoxie");

      // 清空并自动获得焦点
      this.event = "";
      this.$refs.input.focus();
    }
  }
};
</script>
<style>
</style>

