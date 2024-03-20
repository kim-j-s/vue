import { createRouter, createWebHistory } from 'vue-router'

// 라우터를 외부 파일로 수집
// import routes from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/VIndex.vue')
    },
    {
      path: '/pages/tab',
      name: 'tab',
      component: () => import('@/pages/VTabPage.vue'),
      meta: {
        title: '탭 페이지'
      }
    },
    {
      path: '/pages/tab2',
      name: 'tab2',
      component: () => import('@/pages/VTabPage2.vue'),
      meta: {
        title: '탭 페이지 2'
      }
    },
    {
      path: '/pages/swiper',
      name: 'swiper',
      component: () => import('@/pages/VSwiper.vue'),
      meta: {
        title: '스위퍼 페이지'
      }
    },
    {
      path: '/pages/agree',
      name: 'agree',
      component: () => import('@/pages/VAgree.vue'),
      meta: {
        title: '동의 페이지',
        headerUnit: true
      }
    },
    {
      path: '/pages/notice',
      children: [
        {
          path: 'list',
          name: 'notiList',
          component: () => import('@/pages/notice/VList.vue'),
          meta: {
            title: '공지사항 목록 페이지',
            headerUnit: true
          }
        },
        {
          path: 'detail',
          name: 'notiDetail',
          component: () => import('@/pages/notice/VDetail.vue'),
          meta: {
            title: '공지사항 상세 페이지',
            headerUnit: false
          }
        }
      ]
    },
    // {
    // 	path: '/pages/notice/detail',
    // 	name: 'notiDetail',
    // 	component: () => import('@/pages/notice/VDetail.vue'),
    // },
    // 없는 페이지 설정
    {
      path: '/:catchAll(.*)',
      name: 'error',
      component: () => import('@/pages/VErrorPage.vue'),
      meta: {
        title: '에러 페이지'
      }
    }
  ],
  setup() {
    try {
      // setup 내부에서 예외를 발생시키는 코드
      // 예를 들어, 데이터를 불러오거나 비동기 작업을 수행하는 코드
    } catch (error) {
      // 예외 처리
      console.error('An error occurred:', error)
    }
  }
  // routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '홈'
  next()
})

export default router
