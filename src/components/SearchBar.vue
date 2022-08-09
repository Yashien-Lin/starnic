<template>
    <section class="search">
    <div class="container">
      <form class="row align-items-center position-relative px-2">
        <div class="col-8 col-md-3 ps-0">
          <input
            type="search"
            class="form-control search-input"
            placeholder="關鍵字"
          />
        </div>
        <div class="col-md-3 d-none d-md-block">
          <select class="form-select input-grey">
            <option selected disabled>商家區域</option>
            <option value="1">台北</option>
          </select>
        </div>
        <div class="col-md-3 d-none d-md-block">
          <select class="form-select input-grey">
            <option selected disabled>方案</option>
            <option value="1">xxx</option>
          </select>
        </div>
        <div class="col-4 col-md-3 px-0">
          <button type="button" class="btn btn-search">搜尋</button>
        </div>
        <div class="search-side-buttons d-flex gap-2 justify-content-end">
          <button type="button" class="btn p-0">
            <img
              src="@/assets/images/trash.svg"
              alt="trash can icon"
              class="me-1"
            />
            <span class="fs-8 text-grey-300">清除搜尋</span>
          </button>
          <button type="button" class="btn d-md-none p-0">
            <img
              src="@/assets/images/settings.svg "
              alt="trash can icon"
              class="me-1"
            />
            <span class="fs-8 text-grey-300">進階搜尋</span>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
.search {
  background: rgba(255, 244, 198, 0.2);
  padding: 16px 0;
  .search-side-buttons {
    bottom: -50px;
    position: absolute;
    .btn {
      &:focus,
      &:active:focus,
      &.active:focus,
      &.focus,
      &:active.focus,
      &.active.focus,
      &:hover {
        outline: none;
        border-color: transparent;
      }
    }
  }

  input,
  select {
    border-radius: 35px;
    padding: 8px 16px;
    height: 38px;
  }
  .search-input {
    background-color: #EFF0F4;
    border: 0;
  }
  .input-grey {
    background-color: #EFF0F4;
    border: 0;
  }
  .search-select-indicator-color {
      color:#000 !important;
    }

  .search-select:after{
    color: #000;
  }

  .btn-search {
    background: $blue-200;
    color: #fff;
    border-radius: 19px;
    width: 100%;
  }
}

@media (min-width: 768px) {
  .search {
    padding: 27px 0;
    .search-input {
      background: #fbf7e1;
      border: 1px solid #d4b953;
    }
    .search-side-buttons {
      bottom: -28px;
    }
  }
}
</style>
