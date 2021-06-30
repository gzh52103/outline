<template>
    <div class="todoFoot">
        总数：{{datalist.length}}，完成：{{completelist.length}}，未完成：{{uncompletelist.length}}
    </div>
</template>
<script>
export default {
  props: ["datalist"],
  data() {
    return {};
  },
  computed: {
    completelist() {
      return this.datalist.filter(item => item.complete);
    },
    uncompletelist() {
      return this.datalist.filter(item => !item.complete);
    }
  },
  template: "#todoFoot"
};
</script>
<style>
</style>

