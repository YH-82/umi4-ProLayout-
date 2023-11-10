import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      icon: 'Home',
      component: './Home',
    },
    {
      name: '测试',
      path: '/',
      component: './Layout',
      layoutName: 'BasicLayout',
      routes: [
        {
          name: '权限演示',
          path: '/access',
          icon: 'Home',
          component: './Access',
        },
        {
          name: ' CRUD 示例',
          path: '/table',
          component: './Table',
        },
      ]
    },


  ],
  npmClient: 'pnpm',
});

