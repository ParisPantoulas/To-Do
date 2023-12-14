<template>
  <div>
    <Sidebar />
  </div>
  <router-view/>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'HomeView',
  components: { Sidebar }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}

body {
  min-height: 100vh;
  min-width: 100vh;
  background-color: rgb(200, 200, 220);
}
</style>
