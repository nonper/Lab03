import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import AboutOrganizer from '../views/EventOrganizer.vue'
import StudentInfomation from '../views/StudenInfo.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventListView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/aboutOrga',
    name: 'aboutOrga',
    component: AboutOrganizer
  },
  {
    path: '/studentInfo',
    name: 'studentInfo',
    component: StudentInfomation
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
