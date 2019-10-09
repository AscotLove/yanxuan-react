// 路由组件
import Home from '@pages/Home';
import CateList from '@pages/CateList';
import Topic from '@pages/Topic';
import User from '@pages/User';

const routes = [
  {
    path: '/home',
    component: Home,
    state: {
      showFooter: true
    }

  },
  {
    path: '/cateList',
    component: CateList,

  },
  {
    path: '/topic',
    component: Topic,

  },
  {
    path: '/user',
    component: User,

  },
  {
    path: '/',
    name: 'home',
    component: Home,
    state: {
      showFooter: true
    }
  }
];


export default routes;