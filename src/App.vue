<template>
    <Navbar/>
    <RouterView />
</template> 
  
<script>

import Navbar from './components/Layout/Navbar.vue';

  export default {
    name: 'App',
    components: {
      Navbar
    }
  };
</script>

<style scoped>
h1 {
    color: #42b983;
}
</style>