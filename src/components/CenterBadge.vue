<template>
  <a
    href="#"
    class="badge badge-center"
    :class="{
      'btn-grey': statusId === 0,
      'btn-pink': statusId === 1
    }"
  >
    {{ badgeName }}
  </a>
</template>

<script setup>
import { defineProps } from 'vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  statusId: Number,
  badgeName: String
})
</script>
