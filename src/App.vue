<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavegacionPrincipal from './componentes/NavegacionPrincipal.vue'
</script>

<template>
  <header></header>
  <NavegacionPrincipal>
    <RouterLink to="/">Bienvenida</RouterLink>
    <RouterLink to="/guia-estilos">Guia Estilos</RouterLink>
  </NavegacionPrincipal>
  <RouterView />
  <footer></footer>
</template>
