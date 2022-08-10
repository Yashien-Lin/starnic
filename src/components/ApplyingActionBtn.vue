<template>
  <button
    type="button"
    :class="shopButton.className"
    class="btn mb-2"
  >
    {{ shopButton.buttonName }}
  </button>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  statusId: Number
})

const shopButton = computed(() => {
  if (props.statusId === 0) {
    return { className: 'btn-fail', buttonName: '審核未通過' }
  }
  if (props.statusId === 1) {
    return { className: 'btn-auditing', buttonName: '繼續審核中' }
  }
  return { className: 'btn-pass', buttonName: '選購方案' }
})

</script>
