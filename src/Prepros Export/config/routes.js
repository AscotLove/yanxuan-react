// 路由组件
import Home from '@pages/Home';

const routes = [
  {
    path: '/home',
    component: Home,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/',
    component: Home,
  }
];


export default routes;