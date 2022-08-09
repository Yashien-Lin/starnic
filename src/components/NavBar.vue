<template>
  <nav class="navbar bg-blue-700 navbar-expand-lg navbar-light py-3">
    <div class="container-fluid gap-4">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-dark navbar-toggler-icon"></span>
      </button>
      <router-link to="/" class="logo">
        <img src="@/assets/images/logo.png" alt="starnic Logo" />
      </router-link>
      <div
        class="collapse navbar-collapse justify-content-between text-center"
        id="navbarNav"
      >
        <ul class="navbar-nav mb-3 mb-lg-0">
          <li class="">
            <a class="nav-link text-white active" aria-current="page" href="#">我的商家</a>
          </li>
          <li class="">
            <a class="nav-link text-white" href="#">成效報表</a>
          </li>
          <li class="">
            <a class="nav-link text-white" href="#">基本資料</a>
          </li>
          <li class="">
            <a class="nav-link text-white" href="#">評價中心</a>
          </li>
        </ul>
        <div class="navbar-right text-white d-flex flex-column flex-lg-row align-items-center">
          <div class="d-flex justify-content-center align-items-center">
            <img class="me-3" src="@/assets/images/avatar.png" alt="user icon" />
            <span>愛漂亮-林口</span>
          </div>
          <button type="button" class="btn btn-outline-light btn-logout fs-5-half">
            登出
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  --bs-navbar-toggler-focus-width: 0.15rem;
  .navbar-toggler {
    color: rgb(255 255 255 / 70%);
    .navbar-toggler-icon {
      width: 1em;
      height: 1em;
    }
  }
  .navbar-nav{
    .nav-link {
      border-radius: 30px;
      padding: 12px 20px;
      &:hover,
      &:active,
      &:focus  {
        background: rgba(255, 255, 255, 0.5);
        font-weight: bold;
      }
    }
  }
  .logo {
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: 16px;
  }
  .navbar-right {
    gap: 16px;
    .btn-logout{
      border-radius: 30px;
      padding: 6px 28px;
    }
  }
}
@media (min-width: 768px) {
  .navbar {
    padding: 20px 25px;
  }
}
@media (min-width: 992px) {
  .navbar {
    .navbar-right {
      gap: 40px;
    }
    .logo {
      top: 21px;
      position: static;
      transform: none;
    }
  }
}
</style>
