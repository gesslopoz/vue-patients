import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PatientListVue from '../views/patients/PatientList.vue'
import ViewPatient from '../views/patients/ViewPatient.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/patients',
      component: PatientListVue
    },
    {
      path: '/patients/:id',
      name: 'ViewPatient',
      component: ViewPatient, 
      props: true
    }
  ]
})

export default router
