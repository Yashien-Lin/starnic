<template>
  <section class="container content px-0">
    <div class="tab d-flex text-center text-grey-300 fs-5-half fw-bold">
      <a
        @click="statusType = 1"
        class="tab-item tab-processing p-2"
        :class="{ 'tab-item--active': statusType === 1 }"
      >
        執行中
      </a>
      <a
        @click="statusType = 0"
        class="tab-item tab-applying p-2"
        :class="{ 'tab-item--active': statusType === 0 }"
      >
        申請中
      </a>
    </div>
    <div class="main-content px-2-half">
      <div
        class="sorting d-flex justify-content-between align-items-center mb-3">
        <span class="fs-7 d-none d-md-block">共 10 筆商家</span>
        <SortButton :sortType="statusType ? processingSortType : applyingSortType " />
      </div>
      <ProcessingShop v-if="statusType" :processingDataList="processingDataList" />
      <ApplyingShop v-else :applyingDataList="applyingDataList" />
    </div>
  </section>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import ProcessingShop from '@/components/ProcessingShop.vue'
import ApplyingShop from '@/components/ApplyingShop'
import SortButton from '@/components/SortButton.vue'
import { processingData, applyingData, applyingSortType, processingSortType } from '@/api/fakeData/index'

const statusType = ref(1)
const processingDataList = reactive([])
const applyingDataList = reactive([])

onMounted(() => {
  getShopData()
})

const getShopData = () => {
  processingDataList.push(...processingData)
  applyingDataList.push(...applyingData)
  processingDataList.forEach((item) => { item.isTitleOpen = false })
  applyingDataList.forEach((item) => { item.isTitleOpen = false })
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
.content {
  margin-top: 40px;
  .tab {
    margin-bottom: -2px;
    .tab-item {
      border-top: 1px solid $grey-300;
      border-bottom: 1px solid $blue-700;
      background: #fff;
      width: 50%;
      cursor: pointer;

      &--active {
        border: 1px solid $blue-700;
        border-bottom: none;
        color: $blue-700;
      }
    }
  }
  .main-content {
    padding-top: 0.75rem;
    border-top: 1px solid $blue-700;
  }
}

@media (min-width: 768px) {
  .content {
    .tab {
      .tab-item {
        width: 10%;
        min-width: fit-content;
      }
      .tab-processing {
        border-left: 1px solid;
      }
      .tab-applying{
        border-right: 1px solid;
      }
    }
  }
}
</style>
