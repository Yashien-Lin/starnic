<template>
  <button
    :class="[isTypeShop ? shopButton.className : evaluateButton.className]"
    class="btn mb-2"
    type="button"
  >
    {{ isTypeShop ? shopButton.buttonName : evaluateButton.buttonName }}
  </button>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  shopStatusId: Number,
  evaluateStatusId: Number,
  isTypeShop: Boolean
})

const shopButton = computed(() => {
  if (props.shopStatusId === 0) {
    return { className: 'btn-program', buttonName: '選取方案' }
  }
  if (props.shopStatusId === 1) {
    return { className: 'btn-repurchase', buttonName: '續購申請' }
  }
  return { className: 'btn-QRcode', buttonName: '取得QRcode' }
})
const evaluateButton = computed(() =>
  props.evaluateStatusId === 0 ? { className: 'btn-program', buttonName: '選取方案' } : { className: 'btn-repurchase', buttonName: '續購申請' }
)

</script>
