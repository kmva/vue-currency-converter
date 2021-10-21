<template>
  <component :is="layout"></component>
</template>


<script>
import {computed} from 'vue'
import {useRoute} from 'vue-router'
import Main from './views/Main.vue'
import Currency from './views/Currency.vue'

export default {
  setup() {
    const route = useRoute();
    const layout = computed(()=> route.meta.layout)

    return {
      layout
    }
  },
  components: {Main, Currency}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
