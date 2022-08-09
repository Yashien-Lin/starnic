<template>
  <PageTitle />
  <SearchBar />
  <ShopCards />
  <PaginationComponent />
</template>

<script setup>
import PageTitle from '@/components/PageTitle.vue'
import SearchBar from '@/components/SearchBar.vue'
import ShopCards from '@/components/ShopCards.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'

</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

</style>
