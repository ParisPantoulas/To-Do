import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Addplan from '../views/Addplan.vue'
import EditPlan from '../views/EditPlan.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addplan',
    name: 'Addplan',
    component: Addplan
  },
  {
    path: '/plans/:id',
    name: 'EditPlan',
    component: EditPlan,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
