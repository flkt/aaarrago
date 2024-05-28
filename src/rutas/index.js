import { createRouter, createWebHistory } from 'vue-router'
import Bienvenida from '../vistas/Bienvenida.vue'

const rutas = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'bienvenida',
      component: Bienvenida
    },
    {
      path: '/guia-estilos',
      name: 'guia estilos',
      component: () => import('@/vistas/GuiaEstilos.vue')
    },
  ]
})

export default rutas
