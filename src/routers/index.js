import Vue from 'vue'
import Router from 'vue-router'
import ciemaRouter from './cinema'
import mineRouter from './mine'
import movieRouter from './movie'

Vue.use(Router)

const router = new Router({
  routes: [
    ciemaRouter,
    mineRouter,
    movieRouter,
    {
      path: '/',
      redirect: '/movie'
    }
  ]
})
export default router
