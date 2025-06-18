<template>
  <head> 
  </head>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import '@/assets/style.css'

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
}
</style> 