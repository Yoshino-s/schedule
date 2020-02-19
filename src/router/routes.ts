import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '*',
    component: () => import('layouts/Title.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
        meta: {
          title: '我的课程表',
        }
      },
    ],
  }
];

export default routes;
