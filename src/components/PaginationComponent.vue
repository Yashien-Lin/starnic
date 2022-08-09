<template>
  <section class="container">
    <nav aria-label="Page navigation">
      <ul class="pagination my-4 justify-content-center">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
            <span aria-hidden="true" class="px-1">&laquo;</span>
            上一頁
          </a>
        </li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item" aria-current="page">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">
            下一頁
            <span aria-hidden="true" class="px-1">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.pagination {
  --bs-pagination-border-width: 0;
  --bs-pagination-active-bg: #185993;
  .page-link, .page-link.active, .page-link:hover, .page-link:focus {
    border-radius: 50%;
  }
  .active>.page-link, .page-link.active {
    color: #fff;
  }
  .page-link {
    color: $grey-300;
  }
}

</style>
