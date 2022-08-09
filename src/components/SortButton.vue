<template>
  <div class="sorting__btn">
    <button
      v-for="(item, index) in sortType"
      :key="index"
      type="button"
      class="btn btn-sorting"
    >
      {{ item }}
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  sortType: Object
})
console.log(props.sortType)
</script>

<style lang="scss" scoped>
.sorting__btn {
  overflow-x: auto;
  white-space: nowrap;
  button {
    margin-right: 4px;
  }
}
</style>
