<template>
  <a
    href="#"
    class="badge badge-shopCenter"
    :class="{
      'btn-grey': shopStatusId === 0,
      'btn-pink': shopStatusId === 1
    }"
  >
    {{ item.shop_center.shop_center_name }}
  </a>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  shopStatusId: Number
})
console.log(props.shopStatusId)
</script>

<style lang="scss" scoped>
</style>
