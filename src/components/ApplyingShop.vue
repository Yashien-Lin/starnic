<template>
  <div
    v-for="(item, index) in applyingDataList"
    :key="index"
    class="card rounded-0"
  >
    <div class="card__title row">
      <div class="col-2 col-lg-1">
        <div
          class="card__title-imgBox rounded-circle overflow-hidden m-md-auto"
        >
          <img :src="item.img" alt="shop image" />
        </div>
      </div>
      <div class="col-10 col-lg-11">
        <div class="card__title-details d-flex align-items-start gap-1">
          <h2
            :title="item.name"
            :class="{ 'text-truncate': item.isTitleOpen }"
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
        <span class="text-grey-700 fs-7">{{ item.address }}</span>
      </div>
    </div>
    <!-- 商家中心 -->
    <div class="card__centerType row align-items-md-center">
      <div class="col-lg-1"></div>
      <div class="card__centerType-time col-12 col-md-4 col-lg-4">
        <!-- <CenterBadge :shopStatusId="item.shop_center.status"/> -->
        <a
          href="#"
          class="badge badge-shopCenter"
          :class="{
            'btn-grey': item.shop_center.status === 0,
            'btn-pink': item.shop_center.status === 1
          }"
        >
          {{ item.shop_center.shop_center_name }}
        </a>
        <span
          v-if="item.shop_center.status === 0"
          class="fs-7 text-grey-700 fw-bold"
          >尚未購買</span
        >
        <span
          v-else-if="item.shop_center.status === 1"
          class="fs-7 text-pink-600"
        >
          {{ item.shop_center.startAt }} - {{ item.shop_center.endAt }}</span
        >
        <span v-else class="fs-7 text-grey-700">
          {{ item.shop_center.startAt }} - {{ item.shop_center.endAt }}</span
        >
      </div>
      <div class="d-flex justify-content-between col-12 col-md-5 col-lg-5">
        <div
          v-for="(item, index) in item.shop_center.review_score"
          :key="index"
          class="d-flex flex-column align-items-center"
        >
          <span class="review-digit">{{ item.value }}</span>
          <span class="fs-8">{{ item.title }}</span>
        </div>
      </div>
      <div
        class="text-center col-12 col-md-3 col-lg-2 d-flex flex-column align-items-center flex-md-column-reverse mt-3 mt-md-0"
      >
        <ProgramButton
          :shopStatusId="item.shop_center.status"
          :isTypeShop="true"
        />
        <span
          v-if="item.shop_center.status === 1"
          class="text-pink-700 fw-bold fs-8"
          >你購買的專案已到期</span
        >
      </div>
    </div>
    <!-- 評價中心 -->
    <div class="card__centerType row align-items-md-center">
      <div class="col-lg-1"></div>
      <div class="card__centerType-time col-12 col-md-4 col-lg-4">
        <!-- <CenterBadge /> -->
        <a
          href="#"
          class="badge badge-evaluateCenter"
          :class="{
            'btn-grey': item.evaluate_center.status === 0,
            'btn-pink': item.evaluate_center.status === 1
          }"
        >
          評價中心
        </a>
        <span
          v-if="item.evaluate_center.status === 0"
          class="fs-7 text-grey-700 fw-bold"
          >尚未購買</span
        >
        <span
          v-else-if="item.evaluate_center.status === 1"
          class="fs-7 text-pink-600"
        >
          {{ item.evaluate_center.startAt }} -
          {{ item.evaluate_center.endAt }}</span
        >
        <span v-else class="fs-7 text-grey-700">
          {{ item.evaluate_center.startAt }} -
          {{ item.evaluate_center.endAt }}</span
        >
      </div>
      <div
        class="d-flex justify-content-between mb-md-0 col-12 col-md-5 col-lg-5"
      ></div>
      <div
        class="text-center col-12 col-md-3 col-lg-2 d-flex flex-column align-items-center flex-md-column-reverse"
      >
        <ProgramButton
          v-if="item.evaluate_center.status!=2"
          :evaluateStatusId="item.evaluate_center.status"
          :isTypeShop="false"
        />
        <span
          v-if="item.evaluate_center.status === 1"
          class="text-pink-700 fw-bold fs-8"
          >你購買的專案已到期</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import ProgramButton from '@/components/ProgramButton.vue'
// import CenterBadge from '@/components/CenterBadge.vue'

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
      .badge-shopCenter ,
      .badge-evaluateCenter {
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
