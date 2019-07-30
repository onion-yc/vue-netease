// 引入五个路由组件，进行配置
import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Things from '../pages/Things/Things.vue'
import Shooping from '../pages/Shopping/Shooping.vue'
import Profile from '../pages/Profile/Profile.vue'
// 向外暴露的是数组
export default [
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Classify',
    component: Classify
  },
  {
    path: '/Things',
    component: Things
  },
  {
    path: '/Shooping',
    component: Shooping
  },
  {
    path: '/Profile',
    component: Profile
  },
  {
    path: '/',
    redirect: '/Home'
  }
]
