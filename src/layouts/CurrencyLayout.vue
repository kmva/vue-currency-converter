<template>
  <div>
    <top-nav></top-nav>
    <router-view />
  </div>
</template>

<script>
  import TopNav from '../components/TopNav.vue'

  export default {
    components: { TopNav }
  }
</script>

<style>
</style>
