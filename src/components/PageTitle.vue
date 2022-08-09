<template>
  <section class="container title d-flex flex-column align-items-center flex-md-row justify-content-md-between">
    <h1>我的商家</h1>
    <hr class="text-yellow-700 d-md-none" />
    <div class="stores-link">
      <a href="#">
        <img src="@/assets/images/google_maps.svg" alt="google map icon" />
        <span class="text-blue-700 fw-bold">申請Google商家</span>
      </a>
      <a href="#" class="shop-login">
        <img src="@/assets/images/add_shop.svg" alt="add shop icon" />
        <span class="text-blue-700 fw-bold">商家登錄</span>
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.title {
  padding: 14px 0;
  hr {
    width: 90%;
    margin: 0 0 15px;
  }
  .stores-link {
    display: flex;
    gap: 20px;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      margin-right: 10px;
    }
  }
}

@media (min-width: 768px) {
  .title {
    padding: 30px 0 20px;
  }
}
</style>
