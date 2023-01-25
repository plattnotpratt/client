<template>
  <NavBar></NavBar>
  <div class='container overflow-hidden'>
    <Suspense>
    <router-view></router-view>
  </Suspense>
  </div>
</template>

<script setup>
  import NavBar from '@/components/NavBarComponent.vue';
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
