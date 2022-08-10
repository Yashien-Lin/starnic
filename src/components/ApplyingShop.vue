<template>
  <div
    v-for="(item, index) in applyingDataList"
    :key="index"
    class="card rounded-0"
  >
    <div class="card__title row align-items-center">
      <div class="col-2 col-lg-1">
        <div
          class="card__title-imgBox rounded-circle overflow-hidden m-md-auto">
          <img :src="item.img" alt="shop image"/>
        </div>
      </div>
      <div class="col-10 col-lg-11card__title-details d-flex align-items-start gap-1">
        <h2
          :title="item.name"
          :class="{ 'text-truncate': !item.isTitleOpen }"
          class="text-blue-600"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        >
          {{ item.name }}
        </h2>
        <img
          @click="toggleTrigger(item.id)"
          class="btn-title--toggle d-lg-none"
          src="@/assets/images/Arrow_Down.svg"
          alt="arrow down icon"
        />
      </div>
    </div>
    <div class="card__centerType row align-items-md-center">
      <div class="col-2 col-lg-1"></div>
      <div class="card__centerType-time col-10 col-md-5 col-lg-9 d-flex flex-column align-items-start gap-2">
        <CenterBadge :badgeName="item.shop_center.center_name"/>
        <span class="text-grey-700 fs-7">{{ item.address }}</span>
        <p class="fs-7 text-grey-700 m-0">
          申請日期
          {{ item.shop_center.apply_date }}
        </p>
      </div>
      <div class="text-center col-12 col-md-5 col-lg-2 d-flex flex-column align-items-center flex-md-column-reverse">
        <ApplyingActionBtn :statusId="item.shop_center.status"/>
        <span
          v-if="item.shop_center.status === 2"
          class="text-green-700 fw-bold fs-8"
        >
          恭喜通過審核!
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import ApplyingActionBtn from '@/components/ApplyingActionBtn.vue'
import CenterBadge from '@/components/CenterBadge.vue'

const props = defineProps({
  applyingDataList: Object
})

const toggleTrigger = (id) => {
  props.applyingDataList.forEach((item) => {
    if (item.id === id) {
      item.isTitleOpen = !item.isTitleOpen
    }
  })
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
  .card {
    border: none;
    border-bottom: 1px solid #c0c5d3;
    padding: 24px 0;
    h2 {
      margin-bottom: 0;
    }
    &__title-imgBox {
      width: 50px;
      height: 50px;
    }
    &__title-details {
      margin-bottom: 6px;
    }
    &__centerType-time {
      margin: 16px 0;
      .badge-center {
        margin-right: 10px;
      }
    }
    .btn-title--toggle {
      width: 17px;
      padding-top: 4px;
      cursor: pointer;
    }
    .review-digit {
      color: $blue-300;
      font-size: 24px;
      font-weight: bold;
    }
  }
</style>
