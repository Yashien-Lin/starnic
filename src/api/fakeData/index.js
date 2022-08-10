import shop1 from '@/assets/images/logo_icon.png'
import shop2 from '@/assets/images/Bitmap.png'
import shop3 from '@/assets/images/drink_shop.png'

export const processingSortType = [
  '執行率',
  '增加評論數',
  '評論當前數',
  '商家中心效期',
  '評價中心效期'
]

export const applyingSortType = [
  '審核中',
  '審核通過',
  '未通過'
]

export const processingData = [
  {
    id: 1,
    name: '星和醫美台北店',
    img: shop1,
    address: '台北市重慶南路77號12樓',
    shop_center: {
      shop_center_name: '商家中心 一般版',
      startAt: '2020.12.31',
      endAt: '2021.12.31',
      status: 2, // 0:未購買, 1:已到期, 2:未到期
      review_score: [
        {
          title: '評論起始值',
          value: '2'
        },
        {
          title: '評論當前值',
          value: '200'
        },
        {
          title: '已增加評論數',
          value: '198'
        },
        {
          title: '執行率',
          value: '60%'
        }
      ]
    },
    evaluate_center: {
      status: 1,
      startAt: '2020.01.01',
      endAt: '2021.01.01'
    }
  },
  {
    id: 2,
    name: 'JupJup 精釀生啤餐酒館 Craft Beer Bar & Bistro',
    img: shop2,
    address: '台北市重慶南路77號12樓',
    shop_center: {
      shop_center_name: '商家中心 一般版',
      startAt: '2020.12.31',
      endAt: '2021.12.31',
      status: 1,
      review_score: [
        {
          title: '評論起始值',
          value: '2'
        },
        {
          title: '評論當前值',
          value: '200'
        },
        {
          title: '已增加評論數',
          value: '198'
        },
        {
          title: '執行率',
          value: '60%'
        }
      ]
    },
    evaluate_center: {
      status: 1,
      startAt: '2020.01.01',
      endAt: '2021.01.01'
    }
  },
  {
    id: 3,
    name: '波諦波諦鮮做飲料-人氣天然健康手搖飲品店(可外送)大同區飲料',
    img: shop3,
    address: '台北市重慶南路77號12樓',
    shop_center: {
      shop_center_name: '商家中心',
      startAt: '',
      endAt: '',
      status: 0,
      review_score: []
    },
    evaluate_center: {
      status: 2,
      startAt: '2020.01.01',
      endAt: '2022.12.01'
    }
  },
  {
    id: 4,
    name: '波諦波諦鮮做飲料-人氣天然健康手搖飲品店(可外送)大同區飲料',
    img: shop3,
    address: '台北市重慶南路77號12樓',
    shop_center: {
      shop_center_name: '商家中心 一般版',
      startAt: '2020.01.01',
      endAt: '2021.01.01',
      status: 2,
      review_score: [
        {
          title: '評論起始值',
          value: '2'
        },
        {
          title: '評論當前值',
          value: '200'
        },
        {
          title: '已增加評論數',
          value: '198'
        },
        {
          title: '執行率',
          value: '60%'
        }
      ]
    },
    evaluate_center: {
      status: 0,
      startAt: '',
      endAt: ''
    }
  }
]

export const applyingData = [
  {
    id: 1,
    name: '星和醫美台北店',
    img: shop1,
    address: '台北市重慶南路77號12樓',
    shop_center: {
      center_type: 1,
      center_name: '專業版',
      apply_date: '2021.12.31',
      status: 2 // 0:未通過, 1:審核中, 2:審核通過
    }
  },
  {
    id: 2,
    name: '星和醫美台北店',
    img: shop1,
    address: '台北市重慶南路77號12樓',
    shop_center: {
      center_type: 2,
      center_name: '評價中心',
      apply_date: '2021.12.31',
      status: 1
    }
  },
  {
    id: 3,
    name: '星和醫美台北店',
    img: shop1,
    address: '台北市重慶南路77號12樓',
    shop_center: {
      center_type: 2,
      center_name: '評價中心',
      apply_date: '2021.12.31',
      status: 0
    }
  }
]
